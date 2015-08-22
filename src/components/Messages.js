
import React from 'react';
import {Link} from 'react-router';

class Messages extends React.Component {

  render() {
    return (
      <div id="messages">
        <Link className="message" to="message" params={{messageId: 1}}>
          <span className="from">David Brown</span>
          <span className="text">Hey, we need to...</span>
          <span className="time">12:30pm</span>
        </Link>

        <Link className="message" to="message" params={{messageId: 2}}>
          <span className="from">Mary Sweeney</span>
          <span className="text">I followed up w...</span>
          <span className="time">12:10pm</span>
        </Link>

        <Link className="message" to="message" params={{messageId: 3}}>
          <span className="from">DeMarcus Jones</span>
          <span className="text">check this out ...</span>
          <span className="time">11:2am</span>
        </Link>
      </div>
    )
  }
}

export default Messages;
