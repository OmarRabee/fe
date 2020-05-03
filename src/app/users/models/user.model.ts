import { Album } from './album.model';
import { Address } from './address.model';

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  albums: Album[],
  address: Address
}



