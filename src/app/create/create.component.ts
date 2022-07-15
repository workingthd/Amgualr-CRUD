
import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {UserService} from '../user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})



export class CreateComponent implements OnInit {
@Input() previous_button


hides=false
@Output() comings:EventEmitter<any>=new EventEmitter()
@ViewChild('name') inputName;
@ViewChild('email') inputemail;
@ViewChild('contact') inputcontact;
  constructor(private user:UserService, private route:Router) { 

  }
  name="angular"
  getdata(data:any){
    this.user.savedata(data).subscribe((results)=>{
      if(results['status']=='success'){
        this.comings.emit()
      }
    })
  }


 

  handleClear(){
    this.inputName.nativeElement.value = ' ';
    this.inputemail.nativeElement.value = ' ';
    this.inputcontact.nativeElement.value = ' ';
  }

clicks(){
  console.log("coming inside funccc")

}


  ngOnInit(): void {
    if(this.previous_button!=undefined){
      
      this.hides=true
    }
  }

}
