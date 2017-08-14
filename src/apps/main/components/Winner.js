/* @flow */

import React, { Component } from "react";

type Props = {
  winner: string
};

export default class Winner extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
}
