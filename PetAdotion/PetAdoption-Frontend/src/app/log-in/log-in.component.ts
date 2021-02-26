import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";
import {User} from "../models/user";
import {Admin} from "../models/admin";
import {AdminService} from "../services/admin.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
@Input() username:string;
@Input() password:string;
  @Input() type;
  user:User;
  admin:Admin;
  userService:UserService;
  adminService:AdminService;
  constructor(userService:UserService,adminService:AdminService) {
    this.userService=userService;
    this.adminService=adminService;
  }

  login(username:string) {
    if (this.type == "User") {
      let user$: Observable<User> = this.userService.getUserPassword(username);
      user$.subscribe(user => {
        this.user = user[0];
        if (this.user.password == this.password) {
          alert("login successful");
          window.location.href = "homepage/"+this.type+"/"+this.username;
        } else {
          alert("password is wrong");
        }
      })
    } else if (this.type == "Admin") {
      let admin$: Observable<Admin> = this.adminService.getAdminPassword(username);
      admin$.subscribe(admin => {
        this.admin = admin;
        if (this.admin.password == this.password) {
          alert("login successful");
          window.location.href = "homepage/"+this.type+"/"+this.username;
        } else {
          alert("password is wrong");
        }
      });
    }
  }
  signup(){
    window.location.href="/signup"
  }
  ngOnInit() {
  }

}
