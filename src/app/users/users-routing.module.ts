import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserAlbumsComponent } from "./user-albums/user-albums.component";
import { AlbumPhotosComponent } from "./album-photos/album-photos.component";
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: ":userId", component: UserAlbumsComponent},
  { path: ":userId/albums/:albumId", component: AlbumPhotosComponent },
  { path: "**", component: UsersListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
