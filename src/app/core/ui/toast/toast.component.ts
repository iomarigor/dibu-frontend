import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, ViewChild
} from '@angular/core';
import {Subscription} from "rxjs";
import {NgForOf} from "@angular/common";
import {ToastService} from "../../services/toast/toast.service";
import {ToastItemComponent} from "./components/toast-item/toast-item.component";
import {Message, ToastCloseEvent} from "../../models/toast";

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ToastItemComponent,
    NgForOf
  ]
})
export class ToastComponent implements OnInit {

  @Input() preventDuplicates: boolean = false;
  @Input() preventOpenDuplicates: boolean = false;
  @Output() onClose: EventEmitter<ToastCloseEvent> = new EventEmitter<ToastCloseEvent>();
  @ViewChild('container') containerViewChild: ElementRef | undefined;
  @Input() key: string | undefined;
  @Input() position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | 'center' = 'top-right';

  @Input() showTransformOptions: string = 'translateY(100%)';
  @Input() hideTransformOptions: string = 'translateY(-100%)';
  @Input() showTransitionOptions: string = '300ms ease-out';
  @Input() hideTransitionOptions: string = '250ms ease-in';

  private messageSubscription: Subscription | undefined;
  private clearSubscription: Subscription | undefined;
  private messagesArchive: Message[] | undefined;
  public messages: Message[] = [];

  constructor(
    public messageService: ToastService,
    private cd: ChangeDetectorRef
  ) {
    this.messageSubscription = this.messageService.messageObserver.subscribe((messages) => {
      if (messages) {
        if (Array.isArray(messages)) {
          const filteredMessages = messages.filter((m) => this.canAdd(m));
          this.add(filteredMessages);
          return;
        }

        if (this.canAdd(messages)) this.add([messages]);
      }
    });

    this.clearSubscription = this.messageService.clearObserver.subscribe((key) => {
      if (!key) {
        this.messages = [];
        this.cd.markForCheck();
        return;
      }

      if (this.key === key) {
        this.messages = [];
        this.cd.markForCheck();
        return;
      }
      this.cd.markForCheck();
    });
  }

  ngOnInit(): void {

  }

  private add(messages: Message[]): void {
    this.messages = this.messages ? [...this.messages, ...messages] : [...messages];

    if (this.preventDuplicates) {
      this.messagesArchive = this.messagesArchive ? [...this.messagesArchive, ...messages] : [...messages];
    }

    this.cd.markForCheck();
  }

  private canAdd(message: Message): boolean {
    let allow = this.key === message.key;

    if (allow && this.preventOpenDuplicates) {
      allow = !this.containsMessage(this.messages!, message);
    }

    if (allow && this.preventDuplicates) {
      allow = !this.containsMessage(this.messagesArchive!, message);
    }

    return allow;
  }

  private containsMessage(collection: Message[], message: Message): boolean {
    if (!collection) return false;
    return collection.find((m) => m.type === message.type && m.message == message.message) != null;
  }

  public onMessageClose(index: number): void {
    this.messages?.splice(index, 1);

    this.cd.detectChanges();
  }

}
