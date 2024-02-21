import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {NgSwitch, NgSwitchCase, NgSwitchDefault} from "@angular/common";
import {Message} from "../../../../models/toast";

@Component({
  selector: 'app-toast-item',
  templateUrl: './toast-item.component.html',
  styleUrls: ['./toast-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('messageState', [
      state(
        'visible',
        style({
          transform: 'translateY(0)',
          opacity: 1
        })
      ),
      transition('void => *', [style({
        transform: '{{showTransformParams}}',
        opacity: 0
      }), animate('{{showTransitionParams}}')]),
      transition('* => void', [
        animate(
          '{{hideTransitionParams}}',
          style({
            height: 0,
            opacity: 0,
            transform: '{{hideTransformParams}}'
          })
        )
      ])
    ])
  ],
  imports: [
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  standalone: true
})
export class ToastItemComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() message!: Message;
  @Input() index: number = -1;
  @Input() showTransformOptions: string | undefined;
  @Input() hideTransformOptions: string | undefined;
  @Input() showTransitionOptions: string | undefined;
  @Input() hideTransitionOptions: string | undefined;
  @Output() onClose: EventEmitter<number> = new EventEmitter<number>();
  private timeout: any = null;

  constructor(
    private zone: NgZone
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initTimeout();
  }

  ngOnDestroy() {
    this.clearTimeout();
  }

  private clearTimeout(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }

  public onMouseEnter(): void {
    this.clearTimeout();
  }

  public onMouseLeave(): void {
    this.initTimeout();
  }

  private initTimeout(): void {
    this.zone.runOutsideAngular(() => {
      this.timeout = setTimeout(() => {
        this.onClose.emit(this.index);
      }, this.message?.life || 3000);
    });
  }
}
