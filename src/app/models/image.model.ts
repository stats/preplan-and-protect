export class Image {

  public name:string;
  public description:string;
  public dexie_id:number;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }
}
