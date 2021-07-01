import React from 'react';
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility &&
      <p>You will be seeing this if redux action is toggled</p>
    }
    <button onClick={() => dispatch({
      type: 'TOGGLE_MESSAGE',
    })}
    >Toggle Me
    </button>
  </div>
);

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

export default connect(mapStateToProps)(Toggle);
