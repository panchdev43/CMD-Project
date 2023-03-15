import { Component, OnInit } from '@angular/core';
import { AddVetDistributorService } from '../../core/Docter.service';
import { DoctorData } from '../../models/vet-details';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  constructor( private ser:AddVetDistributorService) { }
 

  docterAllDetail:DoctorData[] = [];


  ngOnInit(): void {
     this.getDoctor();
  }
  list:boolean=false ;

  card:boolean=true;



  lists(){

    this.list =true;

    this.card =false;

  }

  cards(){

    this.card =true;

    this.list =false;

  }

  getDoctor(){
    this.ser.getData().subscribe((res)=>{
      this.docterAllDetail = res;
      
    })
  }

  deleteDoctor(i:any){
    this.ser.deleteData(i.id).subscribe((res:any)=>{
       
       this.getDoctor();
     
    })
  }


}
