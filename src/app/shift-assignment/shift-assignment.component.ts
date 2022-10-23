import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shift-assignment',
  templateUrl: './shift-assignment.component.html',
  styleUrls: ['./shift-assignment.component.css']
})
export class ShiftAssignmentComponent implements OnInit {


  selectedCars = [3];
  cars = [
    { id: 1, name: 'Volvo' },
    { id: 2, name: 'Saab', disabled: true },
    { id: 3, name: 'Opel' },
    { id: 4, name: 'Audi' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
