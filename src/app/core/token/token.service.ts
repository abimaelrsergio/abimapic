import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    hastoken(){
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    remoteToken() {
        window.localStorage.removeItem(KEY);
    }
}