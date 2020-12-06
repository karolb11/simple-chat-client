import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    console.log(this.username);
    this.authService.login(this.username, this.password)
      .subscribe();
  }

  public check(): void {
    this.authService.getMe().subscribe(res => console.log(res));
  }


}
