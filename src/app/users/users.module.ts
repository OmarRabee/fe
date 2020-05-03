import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UsersComponent } from "./users.component";
import { UsersListComponent } from "./users-list/users-list.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    AddUserComponent,
    UserAlbumsComponent,
    AlbumPhotosComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UsersModule {}
