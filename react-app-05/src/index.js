import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import store from './store/store';
import { login } from './store/memberSlice';

// router 기능 활성화
// 최상위 컴포넌트 router로 감싸기

// context 저장소 생성
// Context: 여러 컴포넌트에서 값을 공유할 때 사용
// store, slice: 여러 컴포넌트에서 상태(state)를 공유할 때 사용
export const Context = createContext()

// 개발 컴퓨터에서는 localhost
// Netlift에서는 aws 서버
// const host = 'http://localhost:8080'
// const host = 'http://15.165.160.168:8080'


let host = null;

// 현재 react app을 실행시키는 컴퓨터 이름
console.log(window.location.hostname)

const userStr = localStorage.getItem('user');
const token = localStorage.getItem('token')
if (userStr !== null) {
    const user = JSON.parse(userStr);
    store.dispatch(login({user: user, token: token}));
}

// 하위 컴포넌트들에게 저장소를 공유
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={ {host} }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Context.Provider>
);

