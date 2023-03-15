import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointService } from 'src/app/appoint.service';
import { FormControl,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-updateappointment',
  templateUrl: './updateappointment.component.html',
  styleUrls: ['./updateappointment.component.css']
})
export class UpdateappointmentComponent implements OnInit {

  constructor(private route:ActivatedRoute, private httpappoint:AppointService) { }


  updateFormAppoint = new FormGroup({
    Appointment_ID: new FormControl(''),
    Patient_Name: new FormControl(''),
    Department_Name: new FormControl(''),
    Age: new FormControl(''),
    Appointment_Date:new FormControl(''),
    Appointment_Time:new FormControl(''),
    Place:new FormControl('')

   })
       
  users:any="";
  ngOnInit(): void {
    console.warn(this.route.snapshot.params.id)
    this.httpappoint.getCurrentAppointment(this.route.snapshot.params.id).subscribe((data)=>{
      this.users=data;
      this.updateFormAppoint = new FormGroup({
        Appointment_ID: new FormControl(this.users['Appointment_ID']),
        Patient_Name: new FormControl(this.users['Patient_Name']),
        Department_Name : new FormControl(this.users['Department_Name']),    
        Age: new FormControl(this.users['Age']),
        Appointment_Date:new FormControl(this.users['Appointment_Date']),
        Appointment_Time:new FormControl(this.users['Appointment_Time']),
        Place:new FormControl(this.users['Place']),
        
        
       })
    })
  }     

  collection(){
    console.warn("item",this.updateFormAppoint.value)
    this.httpappoint.updateAppointment(this.route.snapshot.params.id,this.updateFormAppoint.value).subscribe((result)=>{
      console.warn("result",result)
    })
  }

}
