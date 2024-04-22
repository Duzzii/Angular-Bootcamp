import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm !: FormGroup;
  constructor(private http: HttpClient, private router: Router, private formbuilder: FormBuilder) { 
  }
  ngOnInit():void  
    {
      this.loginForm = this.formbuilder.group({
        email: [''],
        password: ['', Validators.required]
    })}
    
    login(){
      this.http.get<any>('http://localhost:3000/signupUserList').subscribe(res=>{
        const user = res.find((details: any) =>
        {
          return details.email === this.loginForm.value.email && details.password === this.loginForm.value.password;
        });
        console.log('http://localhost:3000/signupUserList');
        if(user){
          alert('success')
        }
        else
        {
          alert('failed')
        }
      })
    }
    
    submitted = false;

    onSubmit() { this.submitted = true; }
  }
  
