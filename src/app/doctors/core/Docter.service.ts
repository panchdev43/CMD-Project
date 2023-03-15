import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/Operators';
import { DoctorData } from '../models/vet-details';

@Injectable({
  providedIn: 'root'
})
export class AddVetDistributorService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:3000/Doctor"
   // get data from server by GET METHOD

   getData(){
    return this.http.get<DoctorData[]>("http://localhost:3000/Doctor");
  }

  postData(data:DoctorData){

    return this.http.post< DoctorData[]>("http://localhost:3000/Doctor",data);

   }


   deleteData(id:number){

    return this.http.delete<DoctorData[]>("http://localhost:3000/Doctor/" + id).pipe(map((res:any)=>{
      return res;
    }))

   }

   getDataForUpdate(id:any){
    return this.http.get(`${this.url}/${id}`)
   }

   updateData(id:any,data:any){

    return this.http.put(`${this.url}/${id}`,data);
   }

}


