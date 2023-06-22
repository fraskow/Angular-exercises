import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  id: string = "";
  name: string = "";
  lastName: string = "";
  position: string = "";
  salary: number = 0;

  @Output() employeeAdded = new EventEmitter<any>();

  submitForm() {
    const employee = {
      id: this.id,
      name: this.name,
      lastName: this.lastName,
      position: this.position,
      salary: this.salary
    };

    this.employeeAdded.emit(employee);
    this.resetForm();
  }

  resetForm() {
    this.id = "";
    this.name = "";
    this.lastName = "";
    this.position = "";
    this.salary = 0;
  }
}
