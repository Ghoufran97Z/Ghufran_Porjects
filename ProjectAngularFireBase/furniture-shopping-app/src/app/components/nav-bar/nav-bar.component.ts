import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  isOpen:boolean =false;
  constructor(){}
  ngOnInit() {}
  toggleNavBar(){
    this.isOpen=!this.isOpen
  }
}
