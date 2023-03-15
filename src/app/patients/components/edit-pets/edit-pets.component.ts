import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPetsService } from '../../services/add-pets.service';

@Component({
  selector: 'app-edit-pets',
  templateUrl: './edit-pets.component.html',
  styleUrls: ['./edit-pets.component.css']
})
export class EditPetsComponent implements OnInit {

  constructor(private ser: AddPetsService, private router: ActivatedRoute,private rou:Router) { }

  patientValue = new FormGroup({

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

    console.log(this.router.snapshot.params.id);
    this.ser.getDataForUpdate(this.router.snapshot.params.id).subscribe((res: any) => {



      this.patientValue = new FormGroup({

        firstname: new FormControl(res['firstname']),
        lastname: new FormControl(res['lastname']),
        username: new FormControl(res['username']),
        email: new FormControl(res['email']),
        password: new FormControl(res['password']),
        confirmpassword: new FormControl(res['confirmpassword']),
        dob: new FormControl(res['dob']),
        gender: new FormControl(res['gender']),
        address: new FormControl(res['address']),
        country: new FormControl(res['country']),
        state: new FormControl(res['state']),
        postalcode: new FormControl(res['postalcode']),
        phone: new FormControl(res['phone']),
        avtar: new FormControl(res['avtar']),
        shortbio: new FormControl(res['shortbio']),
        status: new FormControl(res['status'])
 
      })

    })

  }

  updateDataPet(){
    // console.log(this.router.snapshot.params.id)
    this.ser.updateData(this.router.snapshot.params.id,this.patientValue.value).subscribe((res)=>{
       
      console.log(res);
      
      this.rou.navigate(['patients'])
    })
  }

}
