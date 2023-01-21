import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
  username: string = ''
  password: string = ''
  message = '';

  constructor(private authService: AuthService, private userService: UserService, private router: Router) 
  {}

  ngOnInit(): void {}

  login()
  {
    this.authService.login(this.username, this.password)
    .subscribe(data => 
    {
      localStorage.setItem('UserToken', data.access_token.toString());
      this.authService.userSubject.next(data.access_token.toString());

      this.userService.getUserInfo().subscribe(data => 
      {
        localStorage.setItem('role', data.role);
      });
      this.router.navigateByUrl('products');
    });
  }
}