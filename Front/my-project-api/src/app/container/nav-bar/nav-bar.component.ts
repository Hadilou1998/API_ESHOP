import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit 
{
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) 
  {}

  ngOnInit(): void
  {
    this.authService.user.subscribe(data => 
    {
      if (data)
        this.isLoggedIn = true
      else
        this.isLoggedIn = false
    })
  }

  logout()
  {
    this.authService.logout();
  }
}
