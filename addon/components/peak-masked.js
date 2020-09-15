import { action } from '@ember/object';
import Component from '@glimmer/component';
import { createTextMaskInputElement } from 'text-mask-core';

const defaultMask = [
  /\d/, /\d/, /\d/, /\d/, ' ',
  /\d/, /\d/, /\d/, /\d/, ' ',
  /\d/, /\d/, /\d/, /\d/, ' ',
  /\d/, /\d/, /\d/, /\d/
];

export default class PeakMaskedComponent extends Component {
  inputElement = null;
  inputMask = null;

  get mask() {
    return this.args.mask ?? defaultMask;
  }

  get value() {
    return this.args.value ?? '';
  }

  @action onInsert(inputElement) {
    this.inputElement = inputElement;
    this.inputMask = createTextMaskInputElement({
      inputElement: this.inputElement,
      mask: this.mask,
    });

    this.inputMask.update(this.value);
  }

  @action onInput(event) {
    const { target } = event;
    const { value } = target;

    this.inputMask.update(value);

    if (this.args.onChange) {
      this.args.onChange(this.inputMask.state.previousConformedValue);
    }
  }
}
