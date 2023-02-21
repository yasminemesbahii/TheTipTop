import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
   Signout(){
      this.router.navigate(['/home']);
      localStorage.removeItem('TokenAdmin');
      localStorage.removeItem('TokenEmployer');
      localStorage.removeItem('TokenUser');
   }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
}
