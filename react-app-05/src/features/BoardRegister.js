// 상품 등록 화면

import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../index";
import { useNavigate } from "react-router-dom";

// 새로운 게시물 정보를 입력받는 화면
// 게시물 데이터: 번호, 제목, 내용, 작성자, 등록일, 수정일
// 사용자가 입력해야하는 필드: 제목, 내용

// 게시물 등록 이벤트 처리


const BoardRegister = () => {

  // 게시물 데이터를 담을 state 생성
  // object {}로 초기화
  const [board, setBoard] = useState({})

  // context에서 host 꺼내기
  const {host} = useContext(Context)

  // 일반함수에서 사용x 컴포넌트 함수에서 사용 가능
  const navigate = useNavigate()

  // 이벤트 함수 정의
  // 버튼 클릭시 페이지 이동 방지
  // 등록 화면에서는 등록 버튼을 클릭할때 API 호출됨
  const handlerSubmit = async (event) => {
    event.preventDefault()
    
    // 먼저 파라미터로 게시물 데이터 만들기
    // 중요! 파라미터의 형식: json 문자열 or 폼데이터
    // 제목, 내용, 파일
    // 사용자가 입력한 데이터를 꺼내서 폼데이터 생성
    // json X 폼데이터 O
    const formData = new FormData()
    formData.append('title', board.title)
    formData.append('content', board.content)
    formData.append('uploadFile', board.uploadFile)
    // 사용자가 입력한 게시물 데이터를 꺼내서 등록 처리
    // axios 객체에서 post 함수 호출 - post 메소드
    // post 인자: 주소, 게시물데이터, 헤더
    // axios = 비동기함수
    const response = await axios.post(`${host}/board/register`, formData, {
      headers: {
        Authorization : 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTAyOTU3MTMsImV4cCI6MTc1Mjg4NzcxMywic3ViIjoidXNlciJ9.O7AMY8vhqq3rC3WxPQqF8CthZFTjDnTO54s8VFBrvyo'
      }
    })
    // API 호출 후 처리
    // 게시물 등록 후 게시물 리스트로 이동
    if(response.status === 201){
      console.log(response.data)
      // api 상관없음 리액트 내부 주소
      navigate('/board/list')
    }
  }

  // 사용자가 입력필드에 값을 입력하면 이벤트가 발생됨
  const handlerChange = (e) => {
    // 이벤트가 발생한 엘리먼트에서 필요한 데이터 추출
    // name, value, files(파일 첨부 필드일 경우)
    // console.log(e.target.name,e.target.value,e.target.files)
    
    // 구조 분해 문법을 사용해서 event 객체에 있는 데이터 추출
    const { name, value, files} = e.target
    
    // 이전에 추가한 데이터 유지 안됨
    // 기존 게시물 데이터 유지
    // 기존 게시물 데이터 복제한 다음 새로운 프로퍼티 추가
    // board 상태에 저장할 데이터 만들기
    let newBoard = {...board}

    // 예: {'title': 'aa', 'content':'bb', 'uploadFile': ~}
    // object에 데이터 추가하는 방법
    // 프로퍼티의 key는 입력필드의 name을 사용
    // 프로퍼티의 value는 value를 사용
    if(name === 'uploadFile'){
      newBoard[name] = files[0]
    }else{
      newBoard[name] = value
    }
    setBoard(newBoard)
  }


  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 등록</h3>
        {/* onSubmit 이벤트 추가 */}
        <Form onSubmit={ handlerSubmit }>
          {/* 제목 */}
          <Form.Group className="mb-3" controlId="board.title">
            <Form.Label>제목</Form.Label>
            <Form.Control type="text" name="title" onChange={handlerChange}/>
          </Form.Group>
          {/* 내용 */}
          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" rows={3} name="content" onChange={handlerChange}/>
          </Form.Group>
          {/* 파일 첨부 */}
          <Form.Group className="mb-3" controlId="board.uploadFile">
            <Form.Label>이미지</Form.Label>
            <Form.Control type="file" name="uploadFile" onChange={handlerChange}/>
          </Form.Group>
          {/* 등록 버튼 */}
          <Button variant="secondary" type="submit">등록</Button>
        </Form>
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardRegister