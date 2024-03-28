import {Component, OnDestroy} from '@angular/core';
import {BlockUiComponent} from "../../../../core/ui/block-ui/block-ui.component";
import {ModalComponent} from "../../../../core/ui/modal/modal.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ToastComponent} from "../../../../core/ui/toast/toast.component";
import {ToastService} from "../../../../core/services/toast/toast.service";
import {ManagerService} from "../../../../core/services/manager/manager.service";
import {Subscription} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {IRequest} from "../../../../core/models/requests";

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
  providers: [ToastService, ManagerService]
})
export class RequestsComponent implements OnDestroy {

  private _subscriptions: Subscription = new Subscription();

  protected isLoading: boolean = false;
  protected requests: IRequest[] = [];

  constructor(
    private _toastService: ToastService,
    private _managerService: ManagerService
  ) {
    this.getRequests();
  }

  ngOnDestroy() {
    this._subscriptions.unsubscribe();
  }

  private getRequests(): void {
    this.isLoading = true;

    this._subscriptions.add(
      this._managerService.getRequests().subscribe({
        next: (res) => {
          this.isLoading = false;
          if (!res.detalle) {
            this._toastService.add({type: 'error', message: res.msg});
            return;
          }

          this.requests = res.detalle;
        },
        error: (err: HttpErrorResponse) => {
          console.error(err);
          this.isLoading = false;
          this._toastService.add({
            type: 'error',
            message: 'No se pudo obtener el listado de solicitantes, intente de nuevo'
          });
        }
      })
    );
  }

}
