import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-employer',
  templateUrl: './sidebar-employer.component.html',
  styleUrls: ['./sidebar-employer.component.less']
})
export class SidebarEmployerComponent implements OnInit {

  constructor() { }
  emailEmployer:any=localStorage.getItem('emailEmployer')
  nomEmployer:any=localStorage.getItem('nomEmployer')
  prenomEmployer:any=localStorage.getItem('prenomEmployer')
  ngOnInit(): void {
  }

}
