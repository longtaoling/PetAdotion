import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from './models/user';
import { Admin } from './models/admin';
import { UserService } from './services/user.service';
import { AdminService } from './services/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @Input() username:string;
  // @Input() password:string;
  // @Input() type:;
  // @Input() 
  // user:User;
  // admin:Admin;
  // userService:UserService;
  // adminService:AdminService;
  // constructor(userService:UserService,adminService:AdminService) {
  //   this.userService=userService;
  //   this.adminService=adminService;
  // }

  // login(username:string) {
  //   if (this.type == "User") {
  //     let user$: Observable<User> = this.userService.getUserPassword(username);
  //     user$.subscribe(user => {
  //       this.user = user[0];
  //       if (this.user.password == this.password) {
  //         alert("login successful");
  //         window.location.href = "homepage/"+this.type;
  //       } else {
  //         alert("password is wrong");
  //       }
  //     })
  //   } else if (this.type == "Admin") {
  //     let admin$: Observable<Admin> = this.adminService.getAdminPassword(username);
  //     admin$.subscribe(admin => {
  //       this.admin = admin;
  //       if (this.admin.password == this.password) {
  //         alert("login successful");
  //         window.location.href = "homepage/"+this.type;
  //       } else {
  //         alert("password is wrong");
  //       }
  //     });
  //   }
  // }
  // signup(){
  //   window.location.href="/signup"
  // }
  // ngOnInit() {
  // }

  // // @Input() type:string;
  // // title = 'PetAdoption';
  // // constructor(private route:ActivatedRoute){
  // //   this.route.params.subscribe(params => {
  // //     this.type = params['type'];
  // //     });
  // // }

  // check():boolean{
  //   if (this.type === "User")
  //   return true;
  //   else
  //   return false;
  // }
}
