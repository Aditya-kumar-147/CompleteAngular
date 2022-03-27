import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-validation-second',
  templateUrl: './form-validation-second.component.html',
  styleUrls: ['./form-validation-second.component.css']
})
export class FormValidationSecondComponent implements OnInit {

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    mobile: ['', Validators.required],
    pincode: ['', Validators.required],
    city: ['', Validators.required],
   
  });

  name = new FormControl('');


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
