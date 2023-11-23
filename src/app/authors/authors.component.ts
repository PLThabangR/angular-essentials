import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {

  name= new FormControl("",[Validators.required, Validators.minLength(4)])
  email = new FormControl('', [Validators.required, Validators.email]);
  comment = new FormControl('', [Validators.required, Validators.minLength(4)]);

registerForm = new FormGroup(
  {
    name:this.name,
    email:this.email,
    comment:this.comment

  }
)

  login(){

}


}
