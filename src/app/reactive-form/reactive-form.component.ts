import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  title: string = "Reactive Form"

  courseList:Course[] = [
    new Course('1','BE-Computer Science and Engineering'),
    new Course('2','BE-Civil Engineering'),
    new Course('3','BE-Mechanical Engineering'),
    new Course('4','BE-Electrical and Electronics Engineering'),
    new Course('5','BE-Electronics and Communication Engineering')
  ]

  contactform = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    lastName: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
    email: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
    gender: new FormControl(''),
    qualification: new FormControl('',[Validators.required]),
    skills: new FormGroup({
      html:new FormControl(''),
      css:new FormControl('')
    }),
    address: new FormGroup({
      country: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      state: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")]),
      district: new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$")])
    })
  })

  get fname(){
      return this.contactform.get('firstName')
  }
  get lname(){
      return this.contactform.get('lastName')
  }
  get email(){
    return this.contactform.get('email')
  }

  get course(){
    return this.contactform.get('qualification')
  }

  get country(){
    return this.contactform.get('address')?.get('country')
  }

  get state(){
    return this.contactform.get('address')?.get('state')
  }

  get dist(){
    return this.contactform.get('address')?.get('district')
  }

  handleSubmit() {
    console.log(this.contactform)
  }
}
class Course{
  id:string
  name:string

  constructor(id:string,name:string){
    this.id=id
    this.name=name
  }
}