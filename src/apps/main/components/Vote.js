/* @flow */

import React, { Component } from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";

type Props = {
  pair: string,
  hasVoted: boolean,
  vote: string
};

export default class Vote extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  getPair() {
    return this.props.pair || [];
  }
  isDisabled() {
    return !!this.props.hasVoted;
  }
  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }
  render () {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry}
                  disabled={this.isDisabled()}
                  onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
            {this.hasVotedFor(entry) ?
              <div className="label">Voted</div> : null
            }
          </button>
        )}
      </div>
    );
  }
}
