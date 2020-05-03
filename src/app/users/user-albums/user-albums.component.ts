import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { UserSelectors } from "src/app/store/services/users.selectors";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { Store } from '@ngrx/store';
import { EntityState } from 'src/app/store/reducers';
import { GetUser } from 'src/app/store/actions';
import { AddressCombine } from "../../shared/pipes/address-combine.pipe";
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: "app-user-albums",
  templateUrl: "./user-albums.component.html",
  styleUrls: ["./user-albums.component.css"],
})
export class UserAlbumsComponent implements OnInit {
  user$: Observable<User>;
  loading$: Observable<boolean>;

  constructor(
    private spinner: NgxSpinnerService,
    private activatedRoute: ActivatedRoute,
    private store: Store<EntityState>,
    private userSelectors: UserSelectors
  ) {
    this.user$ = this.userSelectors.User$;
    this.loading$ = this.userSelectors.loading$;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new GetUser(params["userId"]));
    });
  }
}
