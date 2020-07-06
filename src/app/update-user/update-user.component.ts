import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute ,Router } from '@angular/router';
import { User } from 'src/app/User';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: any;
  user: User;

  constructor(private route: ActivatedRoute,private router: Router,
    private UserService: UserService) { }

  ngOnInit() {

  this.user = new User();
  this.id = this.route.snapshot.params['id'];

  this.UserService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));

  }
  updateUser() {
    this.UserService.updateUser(this.id, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }
  onSubmit() {
    this.updateUser();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
}