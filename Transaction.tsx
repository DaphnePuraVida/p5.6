import * as React from "react";
import "./Transaction.css";
export function Transaction() {
  return (
    <div className="Money">
      <h4>Account transactions, transfers and fees</h4>
      <div className="Debit">
        <table className="Table">
          <tr>
            <th>Date</th>
            <th>Transcantion</th>
            <th>AMOUNT IN EUR</th>
          </tr>
          <tr>
            <td>24.04</td>
            <td>Direct debit, received</td>
            <td>+300.00</td>
          </tr>
          <tr>
            <td>24.04</td>
            <td>Wire transfer, received</td>
            <td>-300.00</td>
          </tr>
          <tr>
            <td>24.04</td>
            <td>Wire transfer, paid</td>
            <td>+300.00</td>
          </tr>
          <tr>
            <td>24.04</td>
            <td>Everest: monthly statement extention fee </td>
            <td>+300.00</td>
          </tr>
        </table>
      </div>
      <div>
        <table className="Final-Amount">
          <tr className="Total1">
            <td className="Add">TOTAL</td>
            <td>€ 2,135.00</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
