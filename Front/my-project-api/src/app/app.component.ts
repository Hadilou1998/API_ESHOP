import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './model/user';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'my-project-api';

  /*user: User;

  constructor(private router: Router, private authService: AuthService) 
  {
    this.authService.user.subscribe(x => this.user = x);
  }

  get isAdmin()
  {
    return this.user && this.user.role === "admin";
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }*/
}
