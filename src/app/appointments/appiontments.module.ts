import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppiontmentsRoutingModule } from './appiontments-routing.module';
import { UpdateappointmentComponent } from './updateappointment/updateappointment.component';


@NgModule({
  declarations: [
    UpdateappointmentComponent
  ],
  imports: [
    CommonModule,
    AppiontmentsRoutingModule,
  
  ]
})
export class AppiontmentsModule { }
