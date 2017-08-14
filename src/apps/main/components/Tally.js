/* @flow */

import React, { Component } from "react";

export default class Tally extends Component {
  props: {
    tally: Array<any>,
    pair: Array<string>
  };
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = React.addons.PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getVotes(entry) {
    if(this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  }
  getPair() {
    return this.props.pair || [];
  }
  render () {
    return (
      <div className="tally">
        {this.getPair().map(entry =>
          <div key={entry} className="entry">
            <h1>{entry}</h1>
            <div className="voteCount">
              {this.getVotes(entry)}
            </div>
          </div>
        )}
      </div>
    );
  }
}
