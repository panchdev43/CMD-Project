import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AppointService {

  url=" http://localhost:3000/comments";

  constructor(private http:HttpClient) { }

   
     users(){
      return this.http.get(this.url);
     }

    saveUser(value:any){
    return this.http.post(this.url,value);
    }

    deleteAppointment(id:any){
    return this.http.delete(`${this.url}/${id}`)
    }

    getCurrentAppointment(id:any){
      return this.http.get(`${this.url}/${id}`)
      }

      updateAppointment(id:any,data:any){
        return this.http.put(`${this.url}/${id}`,data)
        }

}
