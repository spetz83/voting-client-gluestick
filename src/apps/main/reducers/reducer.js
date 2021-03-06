/* @flow */

import {List, Map} from "immutable";
type State = {
  // State handle by your reducer goes here
}

function setState(state: State, newState) {
  return state.merge(newState);
}

function vote(state: any, entry) {
  const currentPair = state.getIn(["vote", "pair"]);
  if(currentPair && currentPair.includes(entry)) {
    return state.set("hasVoted", entry);
  }
  return state;
}

function resetVote(state: any) {
  const hasVoted = state.get("hasVoted");
  const currentPair = state.getIn(["vote", "pair"], List());
  if(hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove("hasVoted");
  }
  return state;

}

export default (state: State = Map(), action: { type: string, payload?: any }) => {
  switch (action.type) {
    case "SET_STATE":
      console.log(action.payload);
      return resetVote(setState(state, action.payload));
    case "VOTE":
      return vote(state, action.entry);
    default:
      return state;
  }
};
