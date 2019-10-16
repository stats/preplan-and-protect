export class Phone {
  public type:string;
  public number:string;

  deserialize(input:any){
    Object.assign(this, input);

    return this;
  }
}
