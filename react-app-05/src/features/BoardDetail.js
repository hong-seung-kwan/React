// 게시물 상세 화면
// 게시물 조회 화면이므로 수정불가

import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";

// 가짜데이터
// const board = { no: 1, title: '1번', content: '1번입니다', writer: '둘리', regDate: '2025-06-01', modDate: '2025-06-01' }

// const board = null

// 공통 스타일로 꾸미기
const BoardDetail = () => {

  // URL 주소를 변경하여 페이지를 이동할때 사용
  const navigate = useNavigate()

  // 일반 변수에는 데이터를 담아도 화면 변화 X
  let [board ,setBoard] = useState(null);

  // API를 호출하여 실제 게시물 데이터 가져오가

  // 예: /board/read?no=1
  // API를 호출하기 위해서 게시물 번호 필요
  // url 주소에 포함된 파라미터 추출
  const params = useParams()

  // context 저장소에서 host 가져오기
  // object 구조분해
  const {host} = useContext(Context)

  // axios는 비동기 함수로 응답을 기다렸다가 받아야함
  // await는 async 함수 안에서만 사용 가능
  const apicall = async () => {

    // 예: http://localhost:8080/board/read?no=1
    const response = await axios.get(`${host}/board/read?no=${params.no}`, {
      headers : {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTAyOTU3MTMsImV4cCI6MTc1Mjg4NzcxMywic3ViIjoidXNlciJ9.O7AMY8vhqq3rC3WxPQqF8CthZFTjDnTO54s8VFBrvyo'
      }
    })
    // 응답을 받은 후에 처리
    if(response.status === 200){
      // 요청에 성공했으면 게시물 데이터 저장
      // 상태 업데이트
      setBoard(response.data)
    }else{
      // 요청에 실패했으면 에러메세지 출력
      console.log(`api arror: ${response.status} ${response.statusText}`)
    }
  }

  // api 직접 호출 x
  // apicall()

  // 컴포넌트가 처음에 생성될때 한번만 api 호출
  // 게시물 리스트 조회나 상세 화면은 화면을 띄우는 시점에 api 호출
  useEffect(()=>{
    apicall()
  },[])

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