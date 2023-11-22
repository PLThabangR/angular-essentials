import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  authors :string[]=[""]
  constructor() { }
  getService(){
    return this.authors;
  }
}
