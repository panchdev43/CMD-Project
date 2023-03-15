import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  url="http://localhost:3000/profile"

  constructor(private http:HttpClient) { }

  patientpost(value:any){
  return  this.http.post(this.url,value);
  }

  userPatient(){
    return this.http.get(this.url);
  }


}
