import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    console.log(this.username, this.password);
    this.authService.login(this.username, this.password);
  }

  public check(): void {
    this.authService.getMe().subscribe(res => console.log(res));
  }


}
