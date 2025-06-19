import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';

// router 기능 활성화
// 최상위 컴포넌트 router로 감싸기

// context 저장소 생성
// Context: 여러 컴포넌트에서 값을 공유할 때 사용
// store, slice: 여러 컴포넌트에서 상태(state)를 공유할 때 사용
export const Context = createContext()

const host = 'http://localhost:8080'

// 하위 컴포넌트들에게 저장소를 공유
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={ {host} }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);

