import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ReactDOM.render 메소드는 가상 DOM으로부터 실제 DOM 노드를 생성하고, 
// 루트 요소를 React 요소와 연결합니다.
// React.StrictMode는 개발 모드에서 앱을 실행할 때 추가 검사와 경고를 제공합니다.
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
