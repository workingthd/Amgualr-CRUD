import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  get_data(){

    let url = "http://localhost:4000/v1/users/findAll";
    return this.http.get(url);

  }
  savedata(data:any){

    let url = "http://localhost:4000/v1/users/create";
    return this.http.post(url,data);

  }
  del(id:any){

    let url = `http://localhost:4000/v1/users/delete/${id}`;
    return this.http.delete(url);

  }

  update(id:any,data:any){

    let url = `http://localhost:4000/v1/users/update/${id}`;
    return this.http.put(url,data);

  }

}
