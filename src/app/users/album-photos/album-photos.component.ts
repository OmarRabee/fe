import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { EntityState } from "src/app/store/reducers";
import { UserSelectors } from "src/app/store/services/users.selectors";
import { GetUser } from "src/app/store/actions";


@Component({
  selector: "app-album-photos",
  templateUrl: "./album-photos.component.html",
  styleUrls: ["./album-photos.component.css"],
})
export class AlbumPhotosComponent implements OnInit {
  user$: Observable<User>;
  photos: string[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<EntityState>,
    private userSelectors: UserSelectors
  ) {
    this.user$ = this.userSelectors.User$;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.store.dispatch(new GetUser(params["userId"]));
      this.user$.subscribe(
        (user) =>
          (this.photos = user?.albums?.filter(
            (a) => a.id == params["albumId"]
          )[0].photos)
      );

    });
  }
}


