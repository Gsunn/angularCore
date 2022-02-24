import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'

import { Subject } from 'rxjs';

import { AuthenticationService } from '../services/authentication.service';
import { LoaderService } from '../components/loader/loader.service'
import { UrlService } from '../services/url.service';
import { JwtResponse } from '../models/jwt-response'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;
    formSubmitted: boolean = false;
    formSubmitted$ = new Subject<boolean>();

    constructor(private fb: FormBuilder, private authenticationService: AuthenticationService,
        private router: Router, private route: ActivatedRoute, private urlService: UrlService,
        private loaderService: LoaderService) {

    }

    ngOnInit() {
        this.form = this.fb.group({
            'username': ['', Validators.compose([Validators.required])],
            'password': ['', Validators.compose([Validators.required])]
        });

        this.formSubmitted$.subscribe(value => {
            this.loaderService.mngrLoader('global', value)
        })
    }

    onSubmit(loginForm: FormGroup) {

        this.formSubmitted = true;

        if (this.form.valid) {
            let username = this.form.controls['username'].value;
            let password = this.form.controls['password'].value;

            let user$ = this.authenticationService.login(username, password);

            user$.subscribe({
                next: (jwtResponse: JwtResponse) => {
                    this.handleLoginResponse(jwtResponse)
                },
                error: (err: Error) => console.error(err)
            });

        } else {
            console.log("The form is NOT valid");
            this.formSubmitted = false;
        }
        this.formSubmitted$.next(this.formSubmitted)
    }

    handleLoginResponse(jwtResponse: JwtResponse) {
        if (jwtResponse && jwtResponse.token) {
            this.goToRoute()
        }

        this.formSubmitted = false;
    }

    private goToRoute() {
        
        let map: ParamMap = this.route.snapshot.queryParamMap
        let returnUrl = map.get('returnUrl');
        let queryParams: any = {}

        if (returnUrl) {
            queryParams = this.urlService.getQueryParams(returnUrl)
            returnUrl = this.urlService.shortenUrlIfNecessary(returnUrl)
        } else {
            console
            returnUrl = '/dashboard'
        }
        this.router.navigate([returnUrl], queryParams);
    }

}
