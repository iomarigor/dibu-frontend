import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-block-ui',
  standalone: true,
  imports: [NgIf],
  templateUrl: './block-ui.component.html',
  styleUrl: './block-ui.component.scss'
})
export class BlockUiComponent {
  @Input() show: boolean = false;

  constructor() { }
}
