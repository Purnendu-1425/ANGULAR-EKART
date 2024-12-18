// app.component.ts
import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';  // Import the service
import { Person } from './person.model';  // Import the Person model

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: Person[] = [];  // Array to hold the persons data

  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    // Fetch the persons data from the service
    this.persons = this.personService.getPersons();
  }
}
