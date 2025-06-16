// 로그인 화면
import { CustomCard, CustomContainer } from '../components/styles'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
        <Form>
          {/* 사용자 아이디를 입력받는 필드 */}
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          {/* 사용자 패스워드를 입력받는 필드 */}
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password"/> 
          </Form.Group>
          {/* submit 버튼을 클릭하면 서버로 로그인 데이터 전송 */}
          <Button variant="secondary" type="submit">로그인</Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Login