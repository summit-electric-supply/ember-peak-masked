import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, fillIn, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | peak-masked', function(hooks) {
  setupRenderingTest(hooks);

  test('default @mask', async function(assert) {
    await render(hbs`<PeakMasked />`);

    await fillIn('input', '4000');

    assert.equal(find('input').value, '4000 ____ ____ ____');
  });

  test('@mask', async function(assert) {
    this.customMask = [
      /\d/, /\d/, /\d/, /\d/, ' ',
      /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, ' ',
      /\d/, /\d/, /\d/, /\d/, /\d/
    ];

    await render(hbs`<PeakMasked @mask={{this.customMask}} />`);

    await fillIn('input', '3000');

    assert.equal(find('input').value, '3000 ______ _____');
  });

  test('@value', async function(assert) {
    await render(hbs`<PeakMasked @value='1234' />`);

    assert.equal(find('input').value, '1234 ____ ____ ____');
  });

  test('@onChange', async function(assert) {
    this.value = '';

    await render(hbs`<PeakMasked @onChange={{action (mut value)}} />`);

    await fillIn('input', '5321');

    assert.equal(this.value, '5321 ____ ____ ____');
  });
});
