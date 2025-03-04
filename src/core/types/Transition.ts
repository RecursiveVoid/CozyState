import { Action } from "../Action";

interface Transition {
  action: () => void | Action; 
  from: string;
  to: string;
}

export { Transition };
