import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AlertComponent } from './alert.component';

@NgModule({
    declarations: [
        AlertComponent
    ],
    exports: [
        AlertComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AlertModule { }
