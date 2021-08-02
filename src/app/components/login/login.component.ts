import { Component, OnInit } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, public dialogRef: MatDialogRef<LoginComponent>) { }

  email = '';
  senha = '';

  isLogging$ = this.loginService.isLogging$;


  login() {
    this.loginService.doLogin(this.email, this.senha)
      .subscribe({
        next: () => this.dialogRef.close()
      })
  }

  ngOnInit(): void {
  }

}
