import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user-model";
import {BaseResponse} from "../models/base-response";
import {environment} from "../../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private usersUrl: string;
  private usersUrl = environment.apiUrl.endsWith('/')
    ? environment.apiUrl + 'user/'
    : environment.apiUrl + '/user/';

  constructor(private http: HttpClient) {
    // this.usersUrl = 'http://localhost:8040/DevOpsBuildToolDemo/user/';
  }

  public findAll(): Observable<UserModel[]> {
    console.log('Making request to:', this.usersUrl + 'getAll');
    return this.http.get<UserModel[]>(this.usersUrl+"getAll");
  }

  public save(user: UserModel): Observable<BaseResponse> {
    return this.http.post<BaseResponse>(this.usersUrl+"create", user);
  }

  public login(user: UserModel): Observable<BaseResponse> {
    return this.http.get<any>(this.usersUrl+"login",   {
      params: {
        email: user.email,
        password: user.password,
      }
    });
  }
}
