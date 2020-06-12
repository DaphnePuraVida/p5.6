import * as React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import "./Footer.css";
export function Footer() {
  return (
    <div className="Page-End">
      <div className="Info">
        <div className="Info1">
          <AccessTimeIcon />
          Did you know, that you could extend your due date or set up a direct
          debit?
        </div>
        <div className="Info2">
          <PhoneAndroidIcon />
          Our customer support is here to help support@everestcard.com or +352
          203 31027
        </div>
      </div>
      <div className="Contact">
        <p>
          Everest is powered by SnapSwap International S.A., a fully licensed
          and regulated Electronic Money Institution in Luxembourg.
        </p>
        <p className="Address">SnapSwap International S.A.</p>
        <p className="Address">9, Rue du Laboratoire, L-1911 Luxembourg.</p>
      </div>
    </div>
  );
}
