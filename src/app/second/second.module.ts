import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { SecondRoutingModule } from './second-routing.module';

@NgModule({
    imports: [
        CommonModule,
        SecondRoutingModule
    ],
    declarations: [SecondComponent]
})
export class SecondModule { }