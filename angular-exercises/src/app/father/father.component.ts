import { Component } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent {
  employees: any[] = [];
  features: { [employeeId: string]: string[] } = {};

  addEmployee(employee: any) {
    this.employees.push(employee);
    this.features[employee.id] = [];
  }
  addFeature(employee: any) {
    const feature = 'Nueva característica';
    this.features[employee.id].push(feature);
  }
  getFeatures(employeeId: string): string[] {
    return this.features[employeeId] || [];
  }
}
