import { Controls } from "playground/types/controls.type";

export function createControls<TField extends string>(controls: Controls<TField>): Controls<TField> {
  return controls
}