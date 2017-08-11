/* @flow */

import React, { Component } from "react";
import PureRenderMixin from "react-addons-pure-render-mixin";
import {connect} from "react-redux";
import Winner from "./Winner";
import Tally from "./Tally";


export default class Results extends Component {
  mixins: [PureRenderMixin],
  render () {
    return this.props.winner ?
      <Winner ref="winner" winner="{this.props.winner}"/> :
      <div className="results">
        <Tally {...this.props} />
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
            Next
          </button>
        </div>
      </div>;
  }
}
