import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit
{
  id = this.route.snapshot.params['id'];
  user: any = {id: 0, username: '', role: '', email: '', adresse: ''};

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) 
  {}

  ngOnInit() 
  {
    this.userService.getUserInfo().subscribe(data => 
    {
      this.user = data;
      console.log(data); 
    });
  }

  editUser()
  {
    this.userService.updateUser(this.id, this.user).subscribe(data => 
    {
      console.log('User updated successfully');
      this.router.navigateByUrl('admin');
    }); 
  }
}
