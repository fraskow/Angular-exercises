import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent {
  @Input() employee: any;
  featureName: string="";

  addFeature() {
    // Aquí puedes implementar la lógica para agregar la característica a la persona seleccionada
    // Puedes emitir un evento con la característica como argumento, guardarla en el empleado, etc.
    console.log('Agregando característica:', this.featureName, 'a:', this.employee);
    this.resetForm();
  }

  resetForm() {
    this.featureName = "";
  }
}
