import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit
{
  id!: number;
  user!: User;

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService)
  {}

  ngOnInit(): void 
  {
    this.id = this.route.snapshot.params['id'];
    
    this.userService.getUserInfo().subscribe(data => 
    {
      this.user = data;
      console.log(data); 
    });
  }

  list()
  {
    this.router.navigateByUrl('user');
  }
}
