import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() public show: boolean = false;
  @Output() public showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onNext: EventEmitter<void> = new EventEmitter<void>();
  @Input() public title: string = '';

  @Input() showFooter: boolean = true;
  @Input() showHeader: boolean = true;
  @Input() showClose: boolean = true;

  @Input() buttonSuccess: string = 'Guardar';
  @Input() buttonCancel: string = 'Cancelar';

  @Input() showButtonCancel: boolean = false;

}