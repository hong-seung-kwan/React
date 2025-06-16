// 게시물 목록 화면

import { Link, useNavigate } from "react-router-dom";
import { CustomCard, CustomContainer } from "../components/styles"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// 게시물 리스트
const data = [
  { no: 1, title: '1번', content: '1번입니다', writer: '둘리', regDate: '2025-06-01' },
  { no: 2, title: '2번', content: '2번입니다', writer: '또치', regDate: '2025-06-02' },
  { no: 3, title: '3번', content: '3번입니다', writer: '도우너', regDate: '2025-06-03' }
]

// 게시물 등록 화면으로 이동하는 버튼 추가
// react bootstrap은 grid 시스템을 제공
// <Row> 컴포넌트는 행
// <Col> 컴포넌트는 열
// sm의 값을 사용하여 비율 설정
// sm은 브라우저 화면의 크기에 따라서 비율이 적용됨
const BoardList = () => {

  // URL 주소를 변경하여 페이지를 이동할 때 사용
  const navigate = useNavigate()

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
            {data.map(board =>
              <tr>
                {/* to에 url 주소 입력 */}
                {/* 예: /board/read/1 /board/read/2 */}
                <td><Link to={'/board/read/' + board.no} >{board.no}</Link></td>
                <td>{board.title}</td>
                <td>{board.writer}</td>
                <td>{board.regDate}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardList