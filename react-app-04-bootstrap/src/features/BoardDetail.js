// 게시물 상세 화면
// 게시물 조회 화면이므로 수정불가

import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

// 게시물 데이터가 없으면 에러가 발생함
const board = { no: 1, title: '1번', content: '1번입니다', writer: '둘리', regDate: '2025-06-01', modDate: '2025-06-01' }

// const board = null

// 공통 스타일로 꾸미기
const BoardDetail = () => {

  // URL 주소를 변경하여 페이지를 이동할때 사용
  const navigate = useNavigate()

  return (
    <CustomCard>
      <CustomContainer>
        <h2>게시물 상세</h2>
        {/* 게시물 데이터가 존재하는 경우에만 form을 출력 */}
        {/* board 변수에 값이 있으면 div태그가 생성되고 없으면 생성이 안됨 */}

        {/* 두번째 식에 form 컴포넌트 넣기 */}
        {
          board !== null && <Form>

            <Form.Group className="mb-3" controlId="board.no">
              <Form.Label>번호</Form.Label>
              <Form.Control type="text" value={board.no} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="board.title">
              <Form.Label>제목</Form.Label>
              <Form.Control type="text" value={board.title} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="board.content">
              <Form.Label>내용</Form.Label>
              <Form.Control as="textarea" rows={3} value={board.content} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="board.writer">
              <Form.Label>작성자</Form.Label>
              <Form.Control type="text" value={board.writer} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="board.regDate">
              <Form.Label>등록일</Form.Label>
              <Form.Control type="text" value={board.regDate} readOnly />
            </Form.Group>

            <Form.Group className="mb-3" controlId="board.modDate">
              <Form.Label>수정일</Form.Label>
              <Form.Control type="text" value={board.modDate} readOnly />
            </Form.Group>
            {/* 게시물 수정화면으로 이동하는 버튼 */}
            {/* URL 경로에 게시물 번호 추가 */}
            {/* 예: /board/modify/1 */}
            <Button variant="secondary" onClick={() => {
              navigate(`/board/modify/${board.no}`)
            }}>수정</Button>
          </Form>
        }

      </CustomContainer>
    </CustomCard>
  )
}

export default BoardDetail