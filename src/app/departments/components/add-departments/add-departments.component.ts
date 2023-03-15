import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { deptData } from '../../core/department-Datatype';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-add-departments',
  templateUrl: './add-departments.component.html',
  styleUrls: ['./add-departments.component.css']
})
export class AddDepartmentsComponent implements OnInit {

   formValue = new FormGroup({
  
 
    department :new FormControl(''),
     description :new FormControl(''),
     status :new FormControl('')

   })

  // deptDataObj:deptData = new deptData();
   

  constructor(private ser:DepartmentService,private router:Router,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.formValue = this.formbuilder.group({
    //   department : (''),
    //   description :(''),
    //   status :('')

    // })
  }

  postDept(){
    // this.deptDataObj.department = this.formValue.value.department;
    // this.deptDataObj.description = this.formValue.value.description;
    // this.deptDataObj.status = this.formValue.value.status;

    // this.ser.postData(this.deptDataObj).subscribe((res)=>{
    //   this.router.navigate(['departments'])
    // })

     
    this.ser.postData(this.formValue.value).subscribe((res)=>{
      console.log("get data", res)

      this.router.navigate(['departments'])
    })
  }


}
