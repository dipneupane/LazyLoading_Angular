import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './first.component';
import { FirstRoutingModule } from './first-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FirstRoutingModule
    ],
    declarations: [FirstComponent]
})
export class FirstModule { }