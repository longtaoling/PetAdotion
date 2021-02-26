export class User{
  username: string;
  password: string;
  email:string;
  phoneNumber:string;

  constructor(username: string, password: string, email: string, phoneNumber: string) {
    this.username=username
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
}
