import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// index.html 파일에서 root라는 id를 가지고 있는 태그 찾기
// root에 app 함수가 반환하는 태그를 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


