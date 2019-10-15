export class Image {

  public name:string;
  public description:string;
  public data:string;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }
}
