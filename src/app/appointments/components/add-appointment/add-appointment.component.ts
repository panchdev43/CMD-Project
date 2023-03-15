import { Component, OnInit, Input } from '@angular/core';
// import { AddAppointmentDistributorService } from '../../core/add-appointment-distributor.service';
import { AppointService } from 'src/app/appoint.service';
import { FormControl, FormGroup } from '@angular/forms';


//import {AddAppiontmentService} from '../../services/add-appiontment.service'

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

    // Variable declaration and initialization

  // Dependency Injection inside constructor
 // constructor(private addAppointmentDistributorService:AddAppointmentDistributorService) { }

 @Input() source:any

 appointmentForm = new FormGroup({     
  Appointment_ID: new FormControl(''),
  Patient_Name: new FormControl(''),
  Department_Name: new FormControl(''),       
  Age: new FormControl(''),
  Appointment_Date: new FormControl(''),
  Appointment_Time: new FormControl(''),
  Place: new FormControl(''),
  DoctorAppoint: new FormControl(''),

 })

 loginApp(){
  console.warn(this.appointmentForm.value)
 }

 users:any="";
 constructor(private userData:AppointService){
  this.userData.users().subscribe((data)=>
  this.users=data);
 }

  
  ngOnInit(): void {

    // Fetch / Load data

    // Validation Logic
  }

  // Logic for the submit
  onSubmit() {    
  }

  appointFormData(value:any){
   this.userData.saveUser(value).subscribe((result)=>{
    console.warn(result)
   })
  }


  count:any=0;
  countClick(type:any){
  if(type=='add')
  this.count++;
  }

  popAppoint(){
    alert("Added")
  }
}
