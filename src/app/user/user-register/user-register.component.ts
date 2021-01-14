import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  fieldTextType: boolean = false;
  repeatFieldTextType: boolean = false;
  registerForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.initRegisterForm();
  }

  initRegisterForm(){
    this.registerForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [undefined, [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5)]],
      confirmPass: ['',Validators.required]
    }, {validator: this.checkPasswords})
  }

  checkPasswords(formGroup: FormGroup) {
  let pass = formGroup.get('password')?.value;
  let confirmPass = formGroup.get('confirmPass')?.value;

  return pass === confirmPass ? null : { notSame: true }
}

  get email() {
    return this.registerForm.get('email') as FormControl;
  }

  get password(){
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPass(){
    return this.registerForm.get('confirmPass') as FormControl;
  }

  onSubmit(){
    console.log(this.registerForm);
    this.router.navigateByUrl('/login');
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType(){
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }

}
