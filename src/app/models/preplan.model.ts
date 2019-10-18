import { Address } from './address.model';
import { Contact } from './contact.model';
import { FireFlow } from './fireflow.model';
import { Hazard } from './hazard.model';
import { Image } from './image.model';

import * as uuid from 'uuid';

export class Preplan {

  public uuid:string;

  public name:string;
  public aliases:string[];
  public author:string;

  public address:Address;

  public lifeHazard:number;
  public buildingUsage:number;
  public communityImpact:number;
  public buildingConstruction:number;
  public hazardIndex:number;
  public numberOfStories:number;
  public waterSupply:number;
  public squareFootage:number;

  public contacts:Contact[];

  public constructionType:string;
  public floorTruss:boolean;
  public roofTruss:boolean;
  public sprinklers:boolean;
  public standpipe:boolean;
  public elevators:boolean;
  public keybox:boolean;
  public openshaftway:boolean;

  public fireflows:FireFlow[];

  public hazards:Hazard[];

  public images:Image[];

  public created:number;
  public updated:number;

  public version:number;

  constructor() {
    this.uuid = uuid.v4();
    this.created = Date.now();
    this.updated = Date.now();
    this.address = new Address();
    this.aliases = [];
    this.contacts = [];
    this.fireflows = [];
    this.hazards = [];
    this.images = [];
    this.version = 0;
  }

  deserialize(input: any): this {
    Object.assign(this, input);

    /** May need to map aliases **/

    console.log(input.address);

    this.address = new Address().deserialize(input.address);

    this.contacts = input.contacts.map(contact => new Contact().deserialize(contact));
    this.fireflows = input.fireflows.map(fireflow => new FireFlow().deserialize(fireflow));
    this.hazards = input.hazards.map(hazard => new Hazard().deserialize(hazard));
    this.images = input.images.map(image => new Image().deserialize(image));

    return this;
  }

  public get shortAddress():string {
    if(!this.address.address && !this.address.address2) return null;
    return `${this.address.address || ""} ${this.address.address2 || ""}`;
  }

  public get riskRating():number {
    return this.lifeHazard + this.buildingUsage + this.communityImpact + this.buildingConstruction + this.hazardIndex + this.numberOfStories + this.waterSupply + this.squareFootage | 0;
  }

  public get riskCategory():string {
    if(this.riskRating < 13) { return "Low" }
    else if(this.riskRating < 20 ) { return "Medium" }
    else { return "High" }
  }

  public get shortRiskRating():string {
    if(this.riskRating == 0) return null;
    return this.riskRating + ' - ' + this.riskCategory;
  }
}
