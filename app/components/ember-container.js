import Component from '@ember/component';

export default Component.extend({
  componentType: "ember",
  isShowActionBtn: true, 
  count: 0,

  actions: {
    onButtonClick(value) {
      this.set('componentType', value);
      this.set('isShowActionBtn', true);
    },

    onIncreaseCountClick() {
        this.set('count', this.get('count') + 1);
    }, 

    onToggleEmberButton() {
        this.set('isShowActionBtn', !this.get('isShowActionBtn'));
    }
  }
});