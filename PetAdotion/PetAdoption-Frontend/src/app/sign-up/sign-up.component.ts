import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
@Input() username:string;
  @Input() password:string;
  @Input() rePassword:string;
  @Input() email:string;
  @Input() phoneNumber:string;
  userService:UserService;
  user:User;
  constructor(userService:UserService) {
    this.userService=userService
  }
sign(){
    if(this.password==this.rePassword){
    this.user=new User(this.username,this.password,this.phoneNumber,this.email);
      let user$: Observable<User> = this.userService.createUser(this.user);
      user$.subscribe(user=> {
        this.user = user;
        alert("sign up successful")
        window.location.href="/login"
      });
    }else{
      alert("your password and re-entered password is different")
    }
}
  ngOnInit() {
  }

}
