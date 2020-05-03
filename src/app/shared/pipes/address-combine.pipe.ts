import { Pipe, PipeTransform } from '@angular/core';
import { Address } from 'src/app/users/models/address.model';

@Pipe({name: 'addressCombine'})
export class AddressCombine implements PipeTransform {
  transform(address: Address): string {
    return `${address.street}, ${address.suite}, ${address.city}`;
  }
}
