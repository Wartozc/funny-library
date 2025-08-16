import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      documentNumber: ['', Validators.required],
      documentType: ['CC', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirmed: ['', Validators.required],
      rol: ['user', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.registerForm.valid &&
      this.registerForm.get('password') === this.registerForm.get('passwordConfirmed')
    ) {
      console.log(this.registerForm.value);
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }
}
