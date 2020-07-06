import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  IdUser: number;
  user : User ; 

  constructor(private route: ActivatedRoute,private router: Router,
    private UserService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.IdUser = this.route.snapshot.params['Id'];
    
    this.UserService.getUser(this.IdUser)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['users']);
  }
}