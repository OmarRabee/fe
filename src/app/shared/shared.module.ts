import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressCombine } from './pipes/address-combine.pipe';



@NgModule({
  declarations: [AddressCombine],
  imports: [
    CommonModule
  ],
  exports: [
    AddressCombine
  ]
})
export class SharedModule { }
