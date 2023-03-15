import { Component, OnInit } from '@angular/core';
import { pet } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  constructor(private ser:AddPetsService) { }
  
  allDetail:pet[] = [];
 
 
  ngOnInit(): void {

    this.getpatient()
  }


  list:boolean=true;
  card:boolean=false;

  lists(){
    this.list =!this.list;
    this.card =!this.card;
  }
  cards(){
    this.card =!this.card;
    this.list =!this.list;
  }

  getpatient(){
    this.ser.getData().subscribe((res)=>{
      this.allDetail = res;
      console.log(res);
      
      
    })
  }

  deletePatient(i:any){
    this.ser.deleteData(i.id).subscribe((res:any)=>{ 
       this.getpatient();
     
    })

  }
}
