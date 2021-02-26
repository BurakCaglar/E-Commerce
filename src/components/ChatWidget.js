import React, { useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import styled from "styled-components";
import logo from "../assets/customer-service.svg";

import "react-chat-widget/lib/styles.css";

function ChatWidget() {
  useEffect(() => {
    addResponseMessage("Welcome to Customer Services!!");
    addResponseMessage("How can I help you?");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

  return (
    <Wrapper className="App chat">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="Ask us!"
        subtitle="You can write..."
      />
    </Wrapper>
  );
}

export default ChatWidget;

const Wrapper = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
