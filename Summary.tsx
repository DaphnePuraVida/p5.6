import * as React from "react";
import "./Summary.css";
export function Summary() {
  return (
    <div className="Summary">
      <h3>
        Please see below a summary of your three most recent monthly statements
      </h3>
      <div className="SummaryDetails">
        <div>
          <h5>PERIOD</h5>
          <p>24.04.2020 - 24.04.2020</p>
          <p>24.04.2020 - 24.04.2020</p>
          <p>24.04.2020 - 24.04.2020</p>
          <p>24.04.2020 - 24.04.2020</p>
        </div>
        <div>
          <h5>SPENT</h5>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
        </div>
        <div>
          <h5>RECEIVED</h5>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
        </div>
        <div>
          <h5>DUE</h5>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
          <p>€1,135.00</p>
          <p>€48,135.90</p>
        </div>
        <div>
          <h5>STATUS</h5>
          <p>Paid, thank you!</p>
          <p>Extended until 12.05.2020</p>
          <p>No need to pay</p>
          <p>Paid, thank you!</p>
        </div>
      </div>
    </div>
  );
}
