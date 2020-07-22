import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { VMessageModule } from '../shared/vmessage/vmessage.module';

import { SignInComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignUpService } from './singup/signup.service';


@NgModule({
    declarations: [ 
        SignInComponent,
        SingupComponent,
        HomeComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        VMessageModule, 
        RouterModule,
        FormsModule,
        HomeRoutingModule
    ],
    providers: [
        SignUpService
    ]
})
export class HomeModule { }