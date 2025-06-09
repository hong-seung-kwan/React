import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// App 컴포넌트에서 라우트 기능 사용 가능
// Router: Url 경로에 따라 컴포넌트 호출하는 기능
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);

