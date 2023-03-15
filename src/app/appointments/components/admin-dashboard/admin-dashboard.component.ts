import { Component, OnInit } from '@angular/core';
import { AppointService } from 'src/app/appoint.service';
import { DoctorPartService } from 'src/app/doctor-part.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private httpAPPoint:AppointService,private httpDoc:DoctorPartService) { }

  ngOnInit(): void {
    this.getData();
    this.getDocData();
  }

  users:any="";

  getData(){
    this.httpAPPoint.users().subscribe((data)=>
    this.users=data);
  }
      
  Dusers:any=""

  getDocData(){
    this.httpDoc.users().subscribe((data)=>
    this.Dusers=data)
  }


  deleteAD(ids:any){
   this.httpAPPoint.deleteAppointment(ids).subscribe((res)=>{
    console.warn(res)
    this.getData();
    
   })
  }

  count=0;

  deleteC(type:any){
  if(type=='can')
  this.count++;
  }

  count1=0;
  ApprCount(type1:any){
    if(type1=='add')
    this.count1++;
  }


}
