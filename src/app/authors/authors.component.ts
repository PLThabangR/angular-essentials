import { Component } from '@angular/core';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
title :string ='List of authors';
authors :string[]=["John","Happy","Jacob"]

getTitle(){

}
}
