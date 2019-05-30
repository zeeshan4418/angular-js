import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-forms';

  cities = ['Karachi', 'Hyderabad', 'Jamshoro', 'Sukkur'];
  constructor(private fb: FormBuilder) { }

  registerationForm = new FormGroup({
    userName: new FormControl('Zeeshan'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  get userName() {
    return this.registerationForm1.get('userName');
  }

  registerationForm1 = this.fb.group({
    userName: ['',[Validators.required, Validators.minLength(3)]],
    password: [''] ,
    confirmPassword: [''],
    address: this.fb.group({
      city: [''],
      state: [''],
      postalCode: ['']
    })
  });

  loadAPIData() {
    this.registerationForm.setValue({
      userName: 'Zeeshan Memon',
      password: 'Test',
      confirmPassword: 'Test',
      address: {
        city: 'Jamshoro',
        state: 'Sindh',
        postalCode: '123456'
      }

    });
  }

  loadAPIDataPatch() {
    this.registerationForm.patchValue({
      userName: 'Zeeshan Memon',
      password: 'Test',
      confirmPassword: 'Test'
    });
  }




}
