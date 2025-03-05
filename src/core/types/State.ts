import { Action } from './Action';
import { Transition } from './Transition';

interface State {
  name: string | number;
  transitions: Transition[] | Transition;
  update: Action; // or better on? think about the naming
  onEnter: Action;
  onExit: Action;
}

export { State };
