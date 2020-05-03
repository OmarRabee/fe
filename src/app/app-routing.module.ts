import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UsersModule } from "../app/users/users.module";
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    loadChildren: () =>
      import("./users/users.module").then((m) => m.UsersModule),
  }, // lazy load the UsersModule
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
