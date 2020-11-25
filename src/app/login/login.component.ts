import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = "";
  pass = "";
  flag = false;
  constructor(@Inject('auth') private service) { }

  ngOnInit(): void {
  }

  handleClick(){
    console.log(this.user)
    console.log(this.pass)
  }

  handleSubmit(formvalue){
    console.log(formvalue)
    console.log(formvalue.login)
    // console.log('auth result is:' + this.service.loginWithCredentials(formvalue.login.user, formvalue.login.pass));
    let val = this.service.loginWithCredentials(formvalue.login.user, formvalue.login.pass)
    console.log(val)
    console.log(this)
    if(val){
      this.flag = true;
    }
    else{
      this.flag = false;
    }
  }

  blurUser(){
    console.log(this.user)
    //this.user = '';
  }

  blurPass(){
    //this.pass = '';
  }

}
