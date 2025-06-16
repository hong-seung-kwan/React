// 회원가입 화면
import { CustomCard, CustomContainer } from '../components/styles'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// 공통 스타일로 꾸미기
const Register = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>회원가입</h3>
        {/* 폼 */}
        <Form>
          {/* 사용자의 아이디를 입력받는 필드 만들기 */}
          {/* Group컴포넌트 : div 태그 */}
          {/* 라벨을 클릭하면 각 필드 포커스하도록 수정 */}
          {/* 각 입력필드의 id가 중복되지 않도록 수정 */}
          {/* From.Group의 controlId는 label의 for와 input의 id에 한번에 적용됨 */}
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* 사용자의 비밀번호를 입력받는 필드 만들기 */}
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="member.name">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          {/* 사용자의 권한을 입력하는 필드 만들기 */}
          <Form.Group className="mb-3" controlId="member.role">
            {/* 라디오버튼은 name속성으로 하나의 그룹으로 묶어야함 */}
            <Form.Check
            type="radio"
            label="사용자"
            id="member.role1"
            name="role"
          />
          <Form.Check
            type="radio"
            label="관리자"
            id="member.role2"
            name="role"
          />
          </Form.Group>
          {/* 등록 버튼 추가 */}
          {/* 폼에 submit 버튼 추가 */}
          {/* 버튼을 클릭하면 폼데이터가 서버로 전송됨 */}
          <Button variant="secondary" type="submit">등록</Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Register