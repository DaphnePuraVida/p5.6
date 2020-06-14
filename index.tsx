import * as React from "react";
import ReactDom from "react-dom";
import { Header } from "./Header";
import { SubHeader } from "./SubHeader";
import { Account } from "./Account";
import { Customer } from "./Customer";
import { Transaction } from "./Transaction";
import { Summary } from "./Summary";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Account />
      <Customer />
      <Transaction />
      <Summary />
      <Footer />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("root"));
