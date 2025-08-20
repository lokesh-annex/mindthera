
import React from "react";
import { FaLeaf, FaHeart, FaBaby, FaLock } from "react-icons/fa";

export default function Anwendungsbereiche() {
  return (
    <section
      className="py-5 position-relative"
      style={{
        background:'#f8f5fd'
      }}
    >
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "400px" }}>
        <div
          className=" p-5 bg-white bg-opacity-90"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <h2 className="fw-bold mb-4 text-center" style={{
            color: "#000",
            fontSize: "2.5rem",
            letterSpacing: "1px",
          }}>
            Anwendungsbereiche von HTR
          </h2>
          <ul className="list-unstyled mb-3">
            <li className="d-flex align-items-center mb-3">
              <span className="me-3 text-primary" style={{ fontSize: "1.5rem" }}><FaLeaf /></span>
              <span>Traumata aus früheren Leben <span className="text-muted">(z.B. unerklärliche Ängste, Blockaden)</span></span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <span className="me-3 text-success" style={{ fontSize: "1.5rem" }}><FaHeart /></span>
              <span>Vererbte Familienmuster und karmische Belastungen</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <span className="me-3 text-warning" style={{ fontSize: "1.5rem" }}><FaBaby /></span>
              <span>Geburtstraumata und pränatale Erfahrungen</span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <span className="me-3 text-danger" style={{ fontSize: "1.5rem" }}><FaLock /></span>
              <span>Emotionale Blockaden, die den Alltag beeinträchtigen</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
