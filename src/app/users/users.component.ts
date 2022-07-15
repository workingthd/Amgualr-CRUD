import { Component, OnInit , Input} from '@angular/core';
import {UserService} from '../user.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
compohide:any=false
data:any=[];
nums:number=0;
name:any="";
email:any="";
contact:any="";
id:any="";
pri_button:any=true

@Input() users
  constructor(private user:UserService) {
    this.user.get_data().subscribe((data:any)=>{
      this.data=data.data
      console.warn(this.data)
    })
   }

  ngOnInit(): void {
  }
  
  comings(){
      this.user.get_data().subscribe((data:any)=>{
        this.data=data.data
        console.warn(this.data)
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
      this.compohide=true
      this.name=item_name
      this.email=item_email
      this.contact=item_contact
    }

    console.log(item_id,item_name,item_email,item_contact)
  }

  updatedata(data:any){
    this.user.update(this.id,data).subscribe((results)=>{
      this.user.get_data().subscribe((data:any)=>{
        this.data=data.data
        console.warn(this.data)
      })
    })
    this.compohide=false
  }

  }


  


