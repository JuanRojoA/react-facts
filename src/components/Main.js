import React from "react";
import { reactFacts } from "../data/data";

export default function Main() {
  return (
    <main className="main-container">
      <h1 className="title">Fun facts about React</h1>
      <ul className="list">
        {reactFacts.map((data, key) => {
          return (
            <li key={key} className="list-item">
              {data.fact}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
