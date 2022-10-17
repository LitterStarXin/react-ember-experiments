import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class GlimmerComponent extends Component {
  get getCount() {
    return this.args.count;
  }
}
