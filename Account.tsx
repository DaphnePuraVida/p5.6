import * as React from "react";
import "./Account.css";
export function Account() {
  return (
    <div className="Account-Details">
      <div className="Id">
        <h4> Customer Company SA</h4>
        <p>100, Boulevard Royal, Brussels, Belgium </p>
        <p>IBAN: LUXXXXXXX </p>
        <p>BIC: XXXXXX</p>
      </div>
      <div className="Id">
        <p>Total amount spent:</p>
        <p>Total amount received:</p>
        <p className="Sum">Total amount due:</p>
        <p className="Sum">Please pay no later than: </p>
      </div>
      <div className="Id">
        <p>€4,135.00</p>
        <p>€1,500.60</p>
        <p className="Sum">€2,684.00</p>
        <p className="Sum">May 15th, 2020</p>
      </div>
    </div>
  );
}
