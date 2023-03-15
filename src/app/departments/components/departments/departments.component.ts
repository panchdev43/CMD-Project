import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { deptData } from '../../core/department-Datatype';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {


  formValue!:FormGroup;

  deptDataObj:deptData = new deptData();


  allDetail:deptData[] = [];

  constructor(private ser:DepartmentService,private formbuilder:FormBuilder,private router :Router) {}
 
  ngOnInit(): void {
    this.getDept();
  }
  
  getDept(){
    this.ser.getData().subscribe((res)=>{
      this.allDetail = res;
      
    })
  }
  
  
  deleteDept(i:any){
    this.ser.deleteData(i.id)
    .subscribe((res:any)=>{
     
      this.getDept();
     
    })

  }
  
}
