export class Hazard {

  type:string;
  description:string;

  deserialize(input:any) {
    Object.assign(this, input);

    return this;
  }
}
