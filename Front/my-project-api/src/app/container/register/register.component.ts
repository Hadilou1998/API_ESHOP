import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit 
{
  username: string = ''
  password: string = ''
  role    : string = ''
  email   : string = ''
  adresse : string = ''

  success = false;
  errMessage = ''

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  register() 
  {
    this.authService.register(this.username, this.password, this.role, this.email, this.adresse)
    .subscribe(data => 
    {
      this.success = true
      this.router.navigateByUrl('/products')
    }, (err) => {
      if (err.error.code == 11000) 
      {
        this.errMessage = 'User already exists!! Try something else.'  
      } 
      else 
      {
        this.errMessage = 'Something went wrong!!' 
      }
    });
  }
}
