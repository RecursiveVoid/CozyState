import { Action } from './Action';

interface Transition {
  action: Action;
  trigger: Action; // or event
  from: string;
  to: string;
}

export { Transition };
