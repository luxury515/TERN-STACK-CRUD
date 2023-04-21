import React from "react";

// Route를 사용하여 애플리케이션의 다른 경로를 정의합니다.
import { Route, Routes } from "react-router-dom";

// 앱에서 필요한 모든 컴포넌트를 가져옵니다.
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";

const App = () => {
  return (
    <div>
      {/* 네비게이션 바 컴포넌트를 렌더링합니다. */}
      <Navbar />
      <div style={{ margin: 20 }}>
        {/* Routes 컴포넌트를 사용하여 경로별로 컴포넌트를 매핑합니다. */}
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
