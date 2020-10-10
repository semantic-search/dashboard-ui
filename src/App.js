import React from "react";
import "./App.css";
import TableParent from "./TableParent";
import TableData from "./tableList.json";
import _ from "lodash";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <main className="Wrapper">
        <Header />
        {_.map(TableData, (val, key) => {
          return <TableParent key={key} Title={key} SectionData={val} />;
        })}
      </main>
    </div>
  );
}

export default App;
