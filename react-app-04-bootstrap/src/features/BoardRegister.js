// 상품 등록 화면

import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// 새로운 게시물 정보를 입력받는 화면
// 게시물 데이터: 번호, 제목, 내용, 작성자, 등록일, 수정일
// 사용자가 입력해야하는 필드: 제목, 내용

const BoardRegister = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 등록</h3>
        <Form>
          {/* 제목 */}
          <Form.Group className="mb-3" controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* 내용 */}
          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          {/* 등록 버튼 */}
          <Button variant="secondary" type="submit">등록</Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardRegister