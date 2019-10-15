import { Address } from './address.model';
import { Phone } from './phone.model';

export class Contact {

  public name:string;
  public email:string;

  public phones:Phone[];

  public address:Address;

  deserialize(input:any) {
    Object.assign(this, input);

    this.address = new Address().deserialize(input.address);
    this.phones = input.phones.map(phone => new Phone().deserialize(phone));

    return this;
  }


}
