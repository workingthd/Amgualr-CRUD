import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prev-button',
  templateUrl: './prev-button.component.html',
  styleUrls: ['./prev-button.component.css']
})
export class PrevButtonComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  onload(){
    
    this.route.navigate([""])
  }

}
