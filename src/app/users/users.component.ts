import { Component, OnInit, Input } from "@angular/core";

import { User } from "../users/models/user.model";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { EntityState } from "src/app/store/reducers";
import { UserSelectors } from "src/app/store/services/users.selectors";
import * as UserAction from "../store/actions";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  title = "Users";
  users$: Observable<User[]>;
  user$: Observable<User>;
  loading$: Observable<boolean>;

  constructor(
    private spinner: NgxSpinnerService,
    private store: Store<EntityState>,
    private userSelectors: UserSelectors
  ) {
    this.users$ = this.userSelectors.Users$;
    this.user$ = this.userSelectors.User$;
    this.loading$ = this.userSelectors.loading$;
  }

  ngOnInit() {
    this.getUsers();
    this.loading$.subscribe((isLoading) =>
      isLoading ? this.spinner.show() : this.spinner.hide()
    );
  }

  getUsers() {
    this.store.dispatch(new UserAction.GetUsers());
  }
}
