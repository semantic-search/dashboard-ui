import React, { useState, useCallback, useMemo, useRef } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import "./App.css";
import TableParent from "./TableParent";
import TableData from "./response.json";
import _ from "lodash";
import Header from "./Header";
import StatusBtn from "./StatusBtn";

function App() {
  const [socketUrl, setSocketUrl] = useState(
    "ws://13.68.236.211:7000/ws/151515"
  );
  const messageHistory = useRef([]);

  const {
    sendMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
  } = useWebSocket(socketUrl);

  messageHistory.current = useMemo(
    () => messageHistory.current.concat(lastJsonMessage),
    [lastJsonMessage]
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <div className="App">
      <main className="Wrapper">
        <Header />
        <div className="StatusBtnWrapper">
          <StatusBtn status={connectionStatus} />
        </div>
        {lastJsonMessage
          ? _.map(lastJsonMessage, (val, key) => {
              return <TableParent key={key} Title={key} SectionData={val} />;
            })
          : "NO DATA 😢"}
      </main>
    </div>
  );
}

export default App;
// _.map(lastMessage.data, (val, key) => {
//   return <TableParent key={key} Title={key} SectionData={val} />
