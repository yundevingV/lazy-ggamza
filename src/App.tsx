import React from 'react';
import './tailwind.css'; // Tailwind CSS 파일 임포트
import Album from './pages/Album';

function App() {
  return (
    <div className="w-[400px] grid grid-cols-2 gap-[50px] mx-auto p-4"> {/* 2열 그리드 설정 */}
      <Album />
    </div>
  );
}

export default App;
