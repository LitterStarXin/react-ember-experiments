import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class GlimmerContainer extends Component {
  componentType = "ember";

    onChangeReactContent(value) {
        this.componentType =  value
    }
}
