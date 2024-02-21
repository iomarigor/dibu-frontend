import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Message} from "../../models/toast";

@Injectable()
export class ToastService {
  private messageSource = new Subject<Message | Message[]>();
  private clearSource = new Subject<string | null>();

  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();

  public add(message: Message): void {
    if (message) this.messageSource.next(message);
  }

  public addAll(messages: Message[]): void {
    if (messages && messages.length) this.messageSource.next(messages);
  }

  public clear(key?: string): void {
    this.clearSource.next(key || null);
  }
}
