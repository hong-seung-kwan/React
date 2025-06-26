// 게시물 목록 화면

import { Link, useNavigate } from "react-router-dom";
import { CustomCard, CustomContainer } from "../components/styles"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import { useSelector } from "react-redux";

// 게시물 리스트
// API를 호출하여 데이터베이스에 있는 데이터 가져오기
const BoardList = () => {

  const token = useSelector((state)=> state.member.token);

  // URL 주소를 변경하여 페이지를 이동할 때 사용
  const navigate = useNavigate()

  // 게시물 리스트는 일반변수라서 화면에 변화 x
  // state로 변경
  let [data, setData] = useState(null);

  // 저장소에서 API 주소 꺼내기
  const {host} = useContext(Context)



  // API 기본주소를 전역으로 관리(http://localhost:8080)
  // 다른 컴포넌트도 써야하니까
  // axios에서 주소 변경
  const apicall = async () => {

    // axois ajax fetch 와 같이 api를 호출하는 함수는 비동기 함수.
    // 비동기 함수를 사용할때는 await async 키워드를 함께 사용
    // await는 async 함수 안에서만 사용 가능
    // api를 호출하고 응답받는 함수
    const respone = await axios.get(`${host}/board/list`, {
      headers: {
        Authorization: token
      }
    });
    if (respone.status !== 200) {
      throw new Error(`api error: ${respone.status} ${respone.statusText}`);
    }
    // 상태 업데이트 응답메세지에서 데이터만 꺼내기
    setData(respone.data)
  }

  // API 호출 > 상태 업데이트 > 컴포넌트 리렌더링 > 다시 API 호출
  // apicall()
  // 해결방법: useEffect 사용
  // API 직접 호출x
  // 인자: 수행할 코드, 실행 주기
  // 빈배열은 컴포넌트가 처음 로드될때 한번만 실행하겠다는 의미
  useEffect( ()=>{
    apicall()
  }, [])


  return (
    <CustomCard>
      <CustomContainer>
        <Row>
          <Col sm={8}>
            <h3>게시물 리스트</h3>
          </Col>
          <Col sm={4}>
          {/* 버튼 클릭하면 등록화면으로 이동 */}
          <Button variant="primary" onClick={()=>{
            navigate('/board/register')
          }}>게시물 등록</Button>
          </Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
            </tr>
          </thead>
          {/* tbody - 실제 데이터 */}
          {/* 데이터 개수에 따라 <tr> 태그 생성 */}
          {/* 게시물 리스트에서 상세로 이동하는 링크 추가 */}
          <tbody>
            {/* jsx에서 변수나 식을 작성할때는 {}중괄호 사용 */}
            {/* data 배열을 순회하여 board라는 변수에 담고 */}
            {/* board를 사용하여 tr 행 하나 완성 */}
            {/* 논리곱 연산자는 첫번째 식이 true일때만 두번째 식 실행 */}
            {/* 게시물 리스트가 없으면 tr태그 생성 x */}
            {data !== null && data.map(board =>
              <tr key={board.no}>
                {/* to에 url 주소 입력 */}
                {/* 예: /board/read/1 /board/read/2 */}
                <td><Link to={'/board/read/' + board.no} >{board.no}</Link></td>
                <td>{board.title}</td>
                <td>{board.writer}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList