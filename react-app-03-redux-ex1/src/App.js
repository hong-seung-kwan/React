
// redux? state를 앱 전역에서 관리하여 컴포넌트들이 상태를 공유할 수 있게
// react-redux? 리액트와 리덕스를 연결하는 도구
// 설치 명령: npm install redux react-redux

import { Provider } from "react-redux";
import {Left1} from './components/Left'
import { Right1 } from './components/Right';
import {createStore} from 'redux';

// 리덕스 도구들
// provider: 컴포넌트에게 스토어를 전달하는 역할
// useSelector: 컴포넌트에서 스토어를 조회하는 함수
// useDispatch: 상태를 변경하는 함수

// 리듀서 함수: 상태 변경 로직 정의
// 리턴값: 새로운 state
function reducer(currentState, action){

  if(currentState === undefined){
    return {num : 1};
  }

  // 이전 state를 유지하기 위해서 복제본
  const newState = {...currentState}

  // 명령이 PLUS면 num값 1 증가
  if(action.type === 'PLUS'){
    newState.num++;
  }

  return newState;

}

const store = createStore(reducer)

function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <div id = 'grid'>
        <Provider store={store}>
          <Left1></Left1>
          <Right1></Right1>
        </Provider>
      </div>
    </div>
  );
}

export default App;
