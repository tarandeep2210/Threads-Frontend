import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn : boolean = false;
  constructor(private authService : AuthService,private router:Router) { 

  }

  ngOnInit() {
    this.authService.updatedata.subscribe(
      (response: boolean) => this.loggedIn = response
    );
    // this.loggedIn = this.authService.loggedIn;

  }

  logout(){
    this.authService.logout();
    this.authService.updatedata.next(this.authService.loggedIn);
    this.router.navigateByUrl('/login');
  }
}
