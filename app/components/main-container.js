import Component from '@ember/component';

export default Component.extend({
  isEmberContainer: true,

  actions: {
    onButtonClick(value) {
      this.set('isEmberContainer', value);
    },
  }
});