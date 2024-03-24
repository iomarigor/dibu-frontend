import { Component } from '@angular/core';
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [
    BlockUiComponent,
    ModalComponent,
    ReactiveFormsModule,
    ToastComponent
  ],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.scss',
  providers: [ToastService]
})
export class RequestsComponent {

}
