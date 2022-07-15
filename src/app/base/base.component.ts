import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
  data:any=[];
  id:any="";
  name:any="";
email:any="";
contact:any="";
  constructor(private user:UserService) {
    this.user.get_data().subscribe((data:any)=>{
      this.data=data.data
      console.warn(this.data)
    })
   }

  ngOnInit(): void {
  }

  updatedata(data:any){
    this.user.update(this.id,data).subscribe((results)=>{
      this.user.get_data().subscribe((data:any)=>{
        this.data=data.data
        console.warn(this.data)
      })
    })
  }
  del(item:any){
    this.user.del(item).subscribe((results)=>{
      this.user.get_data().subscribe((data:any)=>{
        this.data=data.data
        console.warn(this.data)
      })
    })
  }
  user_one(item_id:any,item_name:any,item_email:any,item_contact:any){
    if(item_id){
      this.id=item_id
      this.name=item_name
      this.email=item_email
      this.contact=item_contact
    }

    console.log(item_id,item_name,item_email,item_contact)
  }
}
