export interface Message {
  type: 'error' | 'success' | 'warning' | 'info';
  message: string;
  id?: any;
  key?: string;
  life?: number;
  icon?: string;
  contentStyleClass?: string;
  styleClass?: string;
}

export interface ToastCloseEvent {
  message: Message;
}

export interface ToastItemCloseEvent extends ToastCloseEvent {
  index: number;
}
