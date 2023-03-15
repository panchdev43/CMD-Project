
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { pet } from '../../models/pet-details';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent implements OnInit {

  constructor(private ser: AddPetsService, private formbuilder: FormBuilder, private router: Router) { }

  // formValue! : FormGroup

  // petDataObj:  pet = new pet();

  formValue = new FormGroup({

    firstname: new FormControl(''),
    lastname: new FormControl(''),
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


  ngOnInit(): void {
    // this.formValue = this.formbuilder.group({
    //   firstname : [''],
    //   lastname: [''],
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

  postPatient() {
    // this.petDataObj.firstname = this.formValue.value.firstname;
    // this.petDataObj.lastname = this.formValue.value.lastname;
    // this.petDataObj.username = this.formValue.value.username;
    // this.petDataObj.email = this.formValue.value.email;
    // this.petDataObj.password = this.formValue.value.password;
    // this.petDataObj.confirmpassword = this.formValue.value.confirmpassword;
    // this.petDataObj.dob = this.formValue.value.dob;
    // this.petDataObj.gender = this.formValue.value.gender;
    // this.petDataObj.address = this.formValue.value.address;
    // this.petDataObj.country = this.formValue.value.country;
    // this.petDataObj.state = this.formValue.value.state;
    // this.petDataObj.postalcode = this.formValue.value.postalcode;
    // this.petDataObj.phone = this.formValue.value.phone;
    // this.petDataObj.avtar = this.formValue.value.avtar;
    // this.petDataObj.shortbio = this.formValue.value.shortbio;
    // this.petDataObj.status = this.formValue.value.status;




    // this.ser.postData(this.petDataObj).subscribe((res) => {

    //   this.router.navigate(['patients'])
    //   this.formValue.reset();

    // })

    this.ser.postData(this.formValue.value).subscribe((res: any) => {
      console.log("get data", res)

      this.router.navigate(['patients'])
    })

  }

}
