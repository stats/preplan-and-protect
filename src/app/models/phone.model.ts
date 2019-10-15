export class Phone {
  public name:string;
  public number:string;

  deserialize(input:any){
    Object.assign(this, input);

    return this;
  }
}
