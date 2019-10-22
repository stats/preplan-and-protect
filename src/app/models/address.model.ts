export class Address {

  public address:string;
  public address2:string;
  public city:string;
  public state:string;
  public zipcode:string;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }

  public get anyComponents():boolean {
    return  !this.address && !this.address2 && !this.city && !this.state && !this.zipcode;
  }
}
