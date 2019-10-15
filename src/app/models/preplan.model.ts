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
    this.fireflows = [];
    this.hazards = [];
    this.images = [];
    this.version = 0;
  }

  deserialize(input: any): this {
    Object.assign(this, input);

    /** May need to map aliases **/

    this.address = new Address().deserialize(input.address);

    this.contacts = input.contacts.map(contact => new Contact().deserialize(contact));
    this.fireflows = input.fireflows.map(fireflow => new FireFlow().deserialize(fireflow));
    this.hazards = input.hazards.map(hazard => new Hazard().deserialize(hazard));
    this.images = input.images.map(image => new Image().deserialize(image));

    return this;
  }

}
