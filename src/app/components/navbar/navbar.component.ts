import { Component,OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit  {
  token: any;
  firstName: any ;
  lastName: any;
  email: any;

  ngOnInit(): void {
  this.token = localStorage.getItem('token') ;

    this.firstName = localStorage.getItem('firstName') ;
    this.lastName = localStorage.getItem('lastName') ;
    this.email = localStorage.getItem('email') ;
  }



  signOut(): void {
    this.tokenService.removeToken();
    // refresh page
    window.location.reload();


  }

  constructor(private tokenService : TokenService){}
}
