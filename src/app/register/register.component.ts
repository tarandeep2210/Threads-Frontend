import { Component, OnInit } from '@angular/core';
import { FormGroup  ,Validators, FormBuilder} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  

  constructor(private fb:FormBuilder, 
               private authService: AuthService, private snackBar: MatSnackBar,
               private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required],
          confirmPassword: ['',Validators.required],
      });
  }

  register() {
      const val = this.form.value;
      console.log(val.email);
      console.log(val.password);

      if (val.password===val.confirmPassword) {
          this.authService.register(val.email, val.password)
              .subscribe(
                  () => {
                      console.log("User is registered successfully");
                      // this.loggedIn = true;
                      // this.authService.updatedata.next(this.authService.loggedIn);
                      let snackBarRef = this.snackBar.open('User Registered', 'Dismiss');
                      this.router.navigateByUrl('/login');
                  }
              );
      }
  }

  ngOnInit(){

  }
}
