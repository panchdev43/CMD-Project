import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { deptData } from '../../core/department-Datatype';
import { DepartmentService } from '../../services/department.service';
 
@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  constructor(private ser:DepartmentService  ,private router:ActivatedRoute,private formbuilder:FormBuilder,private rou:Router) { }
  

  formValue = new FormGroup({

    department : new FormControl(''),
    description : new FormControl(''),
    status :new FormControl('')
  })



  ngOnInit(): void {
    
    console.log(this.router.snapshot.params.id);
    this.ser.getDataForUpdate(this.router.snapshot.params.id).subscribe((res:any)=>{
       
      this.formValue = new  FormGroup({
        
        department : new FormControl(res['department']),
        description : new FormControl(res['description']),
        status : new FormControl(res['status'])
    })
      
    })
  }

  updateData(){
    // console.log(this.router.snapshot.params.id)
    this.ser.updateData(this.router.snapshot.params.id,this.formValue.value).subscribe((res)=>{
       
      console.log(res);
      
      this.rou.navigate(['departments'])
    })
  }
}

 




