import React from "react";
import Link from "next/link";

const Breadcrumbs = ({ title = "About Us", items = [{ label: "Home", href: "/" }, { label: "About Us" }] }) => (
  <section id="de-subheader" className="mt-sm-60 pt20 pb20 bg-gradient-45-deg text-light">
    <div className="container relative z-index-1000">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3 className="mb-0">{title}</h3>
        </div>
        <div className="col-lg-6 text-lg-end">
          <ul className="crumb">
            {items.map((item, idx) =>
              item.href ? (
                <li key={idx}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ) : (
                <li key={idx} className="active">{item.label}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Breadcrumbs;