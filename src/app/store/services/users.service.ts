import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment.prod";
import { Observable } from "rxjs";
import { User } from "src/app/users/models/user.model";
import { mergeMap, switchMap, map, flatMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.usersDataAPI);
  }

  getUser(userId): Observable<User> {
    return this.http
      .get<User[]>(environment.usersDataAPI)
      .pipe(
        flatMap(
          users => users.filter((u) => u.id == userId)
        )
      );
  }

  getUserAlbum(userId, albumId) {}

  addUser(user: User): Observable<User> {
    return Observable.create(function (observer) {
      observer.next(user);
    });
  }
}
