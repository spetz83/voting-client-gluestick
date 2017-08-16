/* @flow */

import React, { Component } from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

type Props = {
  winner: string
};

export default class Winner extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <div className="winner">
        Winner is {this.props.winner}!
      </div>
    );
  }
}
