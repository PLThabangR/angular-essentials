import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  authors :string[]=["John","Happy","Jacob"]
  constructor() { }
  getService(){
    return this.authors;
  }
}
