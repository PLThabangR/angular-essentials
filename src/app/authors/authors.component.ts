import { CoursesService } from './../services/courses.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
title :string ='List of authors';
authors:string[] =[];
email:string='';
course=[];
imageUrl ="https://images.unsplash.com/photo-1682687980961-78fa83781450?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
constructor(private coursesService:CoursesService){
  this.authors = coursesService.getService()

}

onSave($event:Event){
console.log("Button clicked",$event)
}


onKeyPress():void{
  console.log(this.email)
}


}
