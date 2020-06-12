import * as React from "react";
import ReactDom from "react-dom";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { Account } from "./Account";
import { Transaction } from "./Transaction";
import { Summary } from "./Summary";
function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Account />
      <Transaction />
      <Summary />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
