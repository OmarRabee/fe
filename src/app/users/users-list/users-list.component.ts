import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from "@angular/core";

import { User } from "../models/user.model";
import { AddressCombine } from "../../shared/pipes/address-combine.pipe";
import { Router } from '@angular/router';


@Component({
  selector: "app-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  private _users: User[] = [];
  @Input() users: User[];

  constructor(private router: Router) {}
}
