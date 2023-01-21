import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user';
import { Observable } from 'rxjs';

@Component
  ({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
  })
export class UserComponent implements OnInit {
  // user: any = {id: 0, username: '', role: '', email: '', adresse: ''};
  user: any = { id: 0, username: '', role: '', email: '', adresse: '' };

  // {id: 0, username: '', role: '', email: '', adresse: ''}
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUserInfo().subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }

  removeUser(id: number, role: string) 
  {
    this.userService.getUserInfo().subscribe(data => 
    {
      this.user = data;
      this.userService.deleteUser(this.user.id, this.user.role).subscribe(data => 
        {
          console.log('User deleted successfully');  
        });
    });
  }
}
