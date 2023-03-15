import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pet } from '../models/pet-details';
import { map } from 'rxjs/Operators'
@Injectable({
  providedIn: 'root'
})   
export class AddPetsService {

  constructor(private http:HttpClient) { }

    url = "http://localhost:3000/Patient"

    // get data from server by GET METHOD

    getData(){
      return this.http.get<pet[]>("http://localhost:3000/Patient");
    }

    postData(data:any){

      return this.http.post("http://localhost:3000/Patient",data);
  
     }


     deleteData(id:number){

      return this.http.delete<pet[]>("http://localhost:3000/Patient/" + id).pipe(map((res:any)=>{
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
