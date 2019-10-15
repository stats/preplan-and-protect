export class Address {

  public address:string;
  public address1:string;
  public city:string;
  public state:string;
  public zipcode:string;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }
}
