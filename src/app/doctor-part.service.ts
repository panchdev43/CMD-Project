import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DoctorPartService {

  url="http://localhost:3000/posts"

  constructor(private http:HttpClient) { }
  
  saveUsers(value:any){
   return this.http.post(this.url,value);
  }

  users(){
    return this.http.get(this.url);
  }

  deleteDoct(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
}
