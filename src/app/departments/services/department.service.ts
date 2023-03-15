import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/Operators';
import { deptData } from '../core/department-Datatype';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }
   url = 'http://localhost:3000/Department'
  // get data from server by GET METHOD

  getData(){
    return this.http.get<deptData[]>("http://localhost:3000/Department");
  }
// ************************************************************************************************************8
  // post data to server by POST METHOD

  //  postData(data:deptData){

  //   return this.http.post<deptData[]>("http://localhost:3000/Department",data);

  //  }

  postData(data:any){

    return this.http.post("http://localhost:3000/Department",data);

   }

// *************************************************************************

   deleteData(id:number){

    return this.http.delete<deptData[]>("http://localhost:3000/Department/" + id).pipe(map((res:any)=>{
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