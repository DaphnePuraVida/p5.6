import * as React from "react";
import "./Customer.css";
const CardTransaction = [
  {
    Date: "24.04",
    Transaction: "Amazon",
    Location: "Luxembourg",
    OriginalAmount: "300.00EUR",
    AmountInEUR: "-300",
  },
  {
    Date: "24.04",
    Transaction: "Amazon",
    Location: "Luxembourg",
    OriginalAmount: "300.00EUR",
    AmountInEUR: "+300",
  },
  {
    Date: "24.04",
    Transaction: "Amazon",
    Location: "Luxembourg",
    OriginalAmount: "300.00EUR",
    AmountInEUR: "-300",
  },
  {
    Date: "24.04",
    Transaction: "Amazon",
    Location: "Luxembourg",
    OriginalAmount: "300.00EUR",
    AmountInEUR: "+300",
  },
];
const array = CardTransaction.map((details) => details);
console.log(array);
export function Customer() {
  return (
    <div className="CardDetails">
      <h5>Card transactions:Denis Kiselev(XX3254,XX7658,XX3423,XX1212)</h5>
      {CardTransaction.map((details, info) => (
        <div className="Details">
          <span>{details.Date}</span>
          <span>{details.Transaction}</span>
          <span>{details.Location}</span>
          <span>{details.OriginalAmount}</span>
          <span>{details.AmountInEUR}</span>
        </div>
      ))}
      <div></div>
    </div>
  );
}
