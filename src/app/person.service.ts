// person.service.ts
import { Injectable } from '@angular/core';
import { Person } from './person.model';  // Adjust the import path as needed

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  // Method to fetch an array of Person objects
  getPersons(): Person[] {
    return [
      new Person(1, 'John Doe', 30),
      new Person(2, 'Jane Smith', 25),
      new Person(3, 'Alice Johnson', 35),
      new Person(4, 'Bob Brown', 40)
    ];
  }
}
