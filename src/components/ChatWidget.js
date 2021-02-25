import React, { useEffect } from "react";
import {
  Widget,
  addResponseMessage
} from "react-chat-widget";

import "react-chat-widget/lib/styles.css";

function ChatWidget() {
  useEffect(() => {
    addResponseMessage("Welcome to this awesome chat!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        //profileAvatar={logo}
        title="Ask us!"
        subtitle="You can write..."
      />
    </div>
  );
}

export default ChatWidget; 