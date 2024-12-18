// person.component.ts
import { Component, Input } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() persons: Person[] = [];  // Input to receive the array of persons
}
