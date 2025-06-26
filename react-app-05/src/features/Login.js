// 로그인 화면
import { CustomCard, CustomContainer } from '../components/styles'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useContext, useState } from 'react';
import { Context } from '../index';
import axios from 'axios';
import { login } from '../store/memberSlice';

const Login = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [user, setUser] = useState({});

  const {host} = useContext(Context);

  const handleChange = (e) => {
    const {name, value} = e.target;

    const newMember = {...user};
    newMember[name] = value;

    setUser(newMember);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      `${host}/login`,
      user
    );

    if (response.status === 200){
      dispatch(login(response.data));
      navigate('/');
    } else {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    }
  }

  return (
    <CustomCard>
      <CustomContainer>
        <h3>로그인</h3>
          <form onSubmit={handleSubmit}>
          {/* 사용자 아이디를 입력받는 필드 */}
          <Form.Group className="mb-3" controlId="member.id">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" name='id' onChange={handleChange}/>
          </Form.Group>
          {/* 사용자 패스워드를 입력받는 필드 */}
          <Form.Group className="mb-3" controlId="member.password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" name='password' onChange={handleChange}/> 
          </Form.Group>
          {/* submit 버튼을 클릭하면 서버로 로그인 데이터 전송 */}
          <Button variant="secondary" type="submit">로그인</Button>
        </form>
      </CustomContainer>
    </CustomCard>
  )
}

export default Login