import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Store } from '@ngrx/store';
import { EntityState } from 'src/app/store/reducers';
import * as UserAction from "../../store/actions";
import { customMailValidator } from "../../shared/custom-validators/c-email.validator";
import { phoneValidator } from 'src/app/shared/custom-validators/phone.validator';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  cities = ["Giza", "Cairo", "Alexandria"];
  addUserForm: FormGroup;

  nameControl: FormControl = new FormControl("", [Validators.required]);
  emailControl: FormControl = new FormControl("", [Validators.required, customMailValidator]);
  phoneControl: FormControl = new FormControl("", [phoneValidator]);
  cityControl: FormControl = new FormControl("", [Validators.required]);
  streetControl: FormControl = new FormControl("", [Validators.required]);
  suiteControl: FormControl = new FormControl("", [Validators.required]);


  constructor(private store: Store<EntityState>,) { }

  ngOnInit(): void {
    this.addUserForm = new FormGroup({
      nameControl: this.nameControl,
      emailControl: this.emailControl,
      phoneControl: this.phoneControl,
      cityControl: this.cityControl,
      streetControl: this.streetControl,
      suiteControl: this.suiteControl
    });
  }

  saveUser() {
    this.store.dispatch(new UserAction.AddUser(
      {
        id: 0,
        name: this.addUserForm.controls.nameControl.value,
        email: this.addUserForm.controls.emailControl.value,
        phone: this.addUserForm.controls.phoneControl.value,
        albums: [],
        address: {
          street: this.addUserForm.controls.streetControl.value,
          suite: this.addUserForm.controls.suiteControl.value,
          city: this.addUserForm.controls.cityControl.value
        }
      }
    ));
  }
}
