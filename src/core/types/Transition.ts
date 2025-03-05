import { Action } from "./Action";

interface Transition {
  action: Action; 
  from: string;
  to: string;
}

export { Transition };
