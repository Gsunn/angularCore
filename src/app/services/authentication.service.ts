import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';
import { JwtRequest } from '../models/jwt-request';
import { JwtResponse } from '../models/jwt-response';
import { tap, shareReplay } from 'rxjs/operators';
import { DateService } from './date.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    constructor(private http: HttpClient, 
                private dateService: DateService,
                private router: Router) { }

    //    login(username: string, password: string): Observable<JwtResponse> {
    login(username: string, password: string): Observable<JwtResponse>  {
        let jwtRequest: JwtRequest = { username, password };

        return this.http.post<any>('http://localhost:3000/login', jwtRequest).pipe(
                tap((resp: any) => this.setSession(resp)),
                shareReplay()
            )
    }

    private setSession(authResult: JwtResponse) {
        const expiresAt = authResult.expirationDate
        console.log("Token expires at " + expiresAt);
        console.log("Token date and time is " + this.dateService.getShortDateAndTimeDisplay(expiresAt));

        localStorage.setItem('id_token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    }

    logout() {
        localStorage.removeItem("id_token");
        localStorage.removeItem("expires_at");

        this.router.navigate(['/login']);
    }

    public isLoggedIn(): boolean {

        let loggedIn: boolean = false;
        let expiration = this.getExpiration()

        if (expiration) {
            return Date.now() < this.getExpiration()
        }

        return loggedIn;
    }

    isLoggedOut(): boolean {
        return !this.isLoggedIn();
    }

    getExpiration(): number {
  
        let expiresAt: number | any = null;
        const expiration = localStorage.getItem("expires_at");
        if (expiration) {
            expiresAt = JSON.parse(expiration)
        }

        return expiresAt;

    }
}
