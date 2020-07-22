import { Input, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as jtw_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService){
        this.tokenService.hastoken() && 
        this.decodeAndNotify();
    }

    setToken(token: string){
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout(){
        this.tokenService.remoteToken();
        this.userSubject.next(null);
    }

    isLogged(){
        return this.tokenService.hastoken();
    }

    getUserName(){
        return this.userName;
    }
}