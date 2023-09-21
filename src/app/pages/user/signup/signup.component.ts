import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  public signupForm: FormGroup;
  private user = new User();
  constructor(private formBuilder: FormBuilder, private userService: UserService
   ) {
    this.signupForm = this.formBuilder.group({
      fullName: [''],
      email: [''],
      password: [''],
      confirmpassword: ['']
    });
  }

  ngOnInit(): void {
  }


  onSignUp() {
    this.user = this.signupForm.value;
    this.userService.signup(this.user)
      .subscribe((response: any) => {
        console.log(this.user)
      }, (_error: any) => {
        
      });
  }

}
