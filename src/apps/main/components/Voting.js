/* @flow */

import React, { Component } from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import { Map} from "immutable";
import {connect} from "react-redux";
import Winner from "./Winner";
import Vote from "./Vote";
import * as actionCreators from "../actions/action_creators";

type Props = {
  winner: string
};

export default class Voting extends Component {
  props: Props;
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render () {
    return (
      <div>
        {this.props.winner ?
          <Winner ref="winner" winner={this.props.winner}/> :
          <Vote {...this.props} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  const thing = state.reducer;
  return {
    pair: thing.getIn(["vote", "pair"]),
    hasVoted: thing.get("hasVoted"),
    winner: thing.get("winner")
  };
}

export const VotingContainer = connect(mapStateToProps, actionCreators)(Voting);
