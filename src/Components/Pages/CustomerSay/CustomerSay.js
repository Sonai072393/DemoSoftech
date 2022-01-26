import React from "react";
import Card from "../../UI/Card/Card";

import style from "../CustomerSay/customer.module.css";

const CustomerSay = () => {
  return (
    <div className={style.customersay_container}>
      <div className={style.customersay_header}>
        <h1>Read What Our Customers say</h1>
      </div>
      <div>
        <Card className={style.para_card}>
          <p>
            At Softech Solutions, our mission is to be an exceptional technology
            partner; empowering our clients to focus on their business. We
            provide the support they need to meet their goals, grow and succeed.
            Unlike your average IT managed service provider, we’re not just
            looking for satisfied clients. We want our clients to become Softech
            dependent because they’re so enthusiastic about our services. To
            Softech fans, we aren’t their IT company. We’re their partner in
            business. Take a look at our reviews below to learn more about why
            Softech has clients raving.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CustomerSay;
