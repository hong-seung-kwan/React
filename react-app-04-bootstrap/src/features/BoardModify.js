import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const board = {no:1, title: '1번', content: '1번입니다', writer:'둘리', regDate:'2025-06-01', modDate:'2025-06-01'}
// const board = null

const BoardModify = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>
        {/* 두번째 식에 <form> 컴포넌트 넣기 */}
        {/* 두번째식에는 하나의 태그만 써야함 */}
        {/* 논리곱 두 식 true면 결과 true */}
        {/* 첫번째 식이 false면 두번째 생략 */}
        {/* board 데이터 있으면 form태그 생성 */}
        {
          board !==null && <Form>

          <Form.Group className="mb-3" controlId="board.no">
            <Form.Label>번호</Form.Label>
            <Form.Control type="text" value={board.no} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" value={board.title}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} value={board.content}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.writer">
            <Form.Label>작성자</Form.Label>
            <Form.Control type="text" value={board.writer} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.regDate">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" value={board.regDate} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.modDate" >
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" value={board.modDate} readOnly/>
          </Form.Group>
          <Button variant="secondary" type="submit">저장</Button>
          <Button variant="danger">삭제</Button>
        </Form>
        }
        
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify