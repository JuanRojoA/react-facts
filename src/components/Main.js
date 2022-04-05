import React from "react";

export default function Main() {
  return (
    <main className="main-container">
      <h1 className="title">Fun facts about React</h1>
      <ul className="list">
        <li className="list-item">Was first released in 2013</li>
        <li className="list-item">Was originally created by Jordan Walke</li>
        <li className="list-item">Has well over 100k stars on Github</li>
        <li className="list-item">It's maintined by Facebook</li>
        <li className="list-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}