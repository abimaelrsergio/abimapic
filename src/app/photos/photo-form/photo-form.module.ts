import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { VMessageModule } from 'src/app/shared/vmessage/vmessage.module';
import { PhotoFormComponent } from './photo-form.component';
import { PhotoModule } from '../photo/photo.module';
import { ImmediateDirectiveClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
    declarations: [
        PhotoFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        FormsModule,
        RouterModule,
        PhotoModule,
        ImmediateDirectiveClickModule
    ]
})
export class PhotoFormModule { }
