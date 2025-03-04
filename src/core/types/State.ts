import { Transition } from './Transition';

interface State {
  name: string | number;
  transitions: Transition[] | Transition;
  action: () => void;
  onEnter: () => void;
  onExit: () => void;
}

export { State };
