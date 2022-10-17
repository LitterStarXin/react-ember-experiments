import React from 'react';
import WithEmberSupport from 'ember-react-components';

@WithEmberSupport
export default class ReactComponent extends React.Component {
  render() {
    const { word, onClickReactButton } = this.props;

    return (
      <section className='react-component'>
        <h4>React Component</h4>
        <p>Count: {word}</p>
        <button onClick={() => onClickReactButton()}>Toggle button in Ember Container</button>
      </section>
    );
  }
}