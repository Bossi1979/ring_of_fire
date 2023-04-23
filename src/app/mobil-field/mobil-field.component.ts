import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobil-field',
  templateUrl: './mobil-field.component.html',
  styleUrls: ['./mobil-field.component.scss']
})
export class MobilFieldComponent {
  @Input() name;
  @Input() playerActive = false;
  @Input() imgP;
}
