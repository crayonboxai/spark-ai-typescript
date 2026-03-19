// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as StateAPI from './state';
import { ComponentState, State, StateCreateParams, UpdateComponentState } from './state';

export class Components extends APIResource {
  state: StateAPI.State = new StateAPI.State(this._client);
}

Components.State = State;

export declare namespace Components {
  export {
    State as State,
    type ComponentState as ComponentState,
    type UpdateComponentState as UpdateComponentState,
    type StateCreateParams as StateCreateParams,
  };
}
