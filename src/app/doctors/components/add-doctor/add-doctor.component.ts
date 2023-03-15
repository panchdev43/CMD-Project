import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddVetDistributorService } from '../../core/Docter.service';
 
import { DoctorData } from '../../models/vet-details';
import { AddVetService } from '../../services/add-vet.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {

  constructor(private ser: AddVetDistributorService, private formbuilder:FormBuilder, private router:Router) { }
  

       
  doctorValue = new FormGroup({

    firstname: new FormControl(''),
    lastname: new FormControl(''),
    speciality: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
    dob: new FormControl(''),
    gender: new FormControl(''),
    address: new FormControl(''),
    country: new FormControl(''),
    state: new FormControl(''),
    postalcode: new FormControl(''),
    phone: new FormControl(''),
    avtar: new FormControl(''),
    shortbio: new FormControl(''),
    status: new FormControl('')

  })
  
  // formValue! : FormGroup
  // DoctorDataObj: DoctorData = new DoctorData();
  ngOnInit(): void {
    // this.formValue = this.formbuilder.group({
    //   firstname : [''],
    //   lastname: [''],
    //   speciality:[''],
    //   username: [''],
    //   email:[''],
    //   password: [''],
    //   confirmpassword: [''],
    //   dob: [''],
    //   gender: [''],
    //   address: [''],
    //   country: [''],
    //   state: [''],
    //   postalcode: [''],
    //   phone: [''],
    //   avtar: [''],
    //   shortbio: [''],
    //   status: ['']


    // })

  }

  postDoctor() {
    // this.DoctorDataObj.firstname = this.formValue.value.firstname;
    // this.DoctorDataObj.lastname = this.formValue.value.lastname;
    // this.DoctorDataObj.speciality = this.formValue.value.speciality;
    // this.DoctorDataObj.username = this.formValue.value.username;
    // this.DoctorDataObj.email = this.formValue.value.email;
    // this.DoctorDataObj.password = this.formValue.value.password;
    // this.DoctorDataObj.confirmpassword = this.formValue.value.confirmpassword;
    // this.DoctorDataObj.dob = this.formValue.value.dob;
    // this.DoctorDataObj.gender = this.formValue.value.gender;
    // this.DoctorDataObj.address = this.formValue.value.address;
    // this.DoctorDataObj.country = this.formValue.value.country;
    // this.DoctorDataObj.state = this.formValue.value.state;
    // this.DoctorDataObj.postalcode = this.formValue.value.postalcode;
    // this.DoctorDataObj.phone = this.formValue.value.phone;
    // this.DoctorDataObj.avtar = this.formValue.value.avtar;
    // this.DoctorDataObj.shortbio = this.formValue.value.shortbio;
    // this.DoctorDataObj.status = this.formValue.value.status;

    
    

    // this.DocSer.postData(this.DoctorDataObj).subscribe((res) => {
    //   this.router.navigate(['doctors'])
    //   this.formValue.reset();

    // })



    this.ser.postData(this.doctorValue.value).subscribe((res: any) => {
      console.log("get data", res)

      this.router.navigate(['doctors'])
    })
    
  }
}
