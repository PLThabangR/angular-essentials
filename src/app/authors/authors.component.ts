import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
credentials={
  email:'',
  comment:''
}

  login(){
console.log(this.credentials);
}


}
