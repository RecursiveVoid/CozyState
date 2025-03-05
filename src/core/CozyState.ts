import { CozyEvent } from 'cozyevent';
import { State } from './types/State';
import { Transition } from './types/Transition';

class CozyState extends CozyEvent {
  // TODO simplyfy the objects internally.

  private _states: Record<string, State>;
  private _transitions: Record<string, Transition>;

  constructor() {
    super();
  }

  public register(state: State) {
    // TODO
  }

  public start(): void {
    // TODO
  }

  public stop(): void {
    // TODO
  }

  public destroy(): void {}
}

export { CozyState };
