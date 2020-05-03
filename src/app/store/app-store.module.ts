import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducers } from "./reducers/index";
import { UserState } from "./reducers/users.reducers";
import { UserEffects } from "./effects/users.effects";
import { UsersService } from "./services/users.service";
import { UserSelectors } from "./services/users.selectors";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature("entityCache", reducers),
    EffectsModule.forFeature([UserEffects]),
  ],
  providers: [
    UsersService,
    UserSelectors
  ],
  exports: [StoreModule, EffectsModule],
})
export class AppStoreModule {}
