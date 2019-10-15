export class FireFlow {

  public name:string;
  public squareFootage:number;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }
}
