import React from "react";

import ERP from "../../UI/Img/erp_development.png";
import WEB from "../../UI/Img/web_application-2.png";
import DESIGN from "../../UI/Img/web_designing-1.png";
import HOSTING from "../../UI/Img/registration_hosting.png";

import "../WhatWeDo/WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="WhatWeDo">
      <h1>What We Do</h1>
      <div className="img_container">
        <img src={ERP} className="erp" alt="erp" />
        <img src={WEB} className="web" alt="web" />
        <img src={DESIGN} className="design" alt="design" />
        <img src={HOSTING} className="hosting" alt="HOSTING" />
      </div>
    </div>
  );
};

export default WhatWeDo;
