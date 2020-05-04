import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_CONVERSATION, RECEIVE_CONVERSATIONS, REMOVE_CONVERSATION } from "../actions/conversation_actions";

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.conversations;
    case RECEIVE_CONVERSATION:
      nextState[action.conversation.id] = action.conversation;
      return nextState;
    case RECEIVE_CONVERSATIONS:
      return action.conversations
    case REMOVE_CONVERSATION:
      delete nextState[action.conversationId];
      return nextState;
    default:
      return state;
  }
};

export default conversationsReducer;