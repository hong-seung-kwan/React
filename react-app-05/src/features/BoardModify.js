import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import axios from "axios";
import { useParams } from "react-router-dom";

// 게시물 수정 화면
// 기존 게시물 데이터 조회
// 일부 데이터 수정 가능
// 수정 버튼을 클릭하면 게시물 데이터 업데이트

const BoardModify = () => {

  let [board, setBoard] = useState(null)

  // api 기본 주소 가져오기
  const {host} = useContext(Context)

  // URL 주소에 포함되어 있는 no 파라미터 꺼내기
  const params = useParams()

  // axios를 사용해서 게시물 단건 조회 api 호출
  const apicall = async () => {
    // 인자: URL주소, 헤더
    const response = await axios.get(`${host}/board/read?no=${params.no}`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NTAyOTU3MTMsImV4cCI6MTc1Mjg4NzcxMywic3ViIjoidXNlciJ9.O7AMY8vhqq3rC3WxPQqF8CthZFTjDnTO54s8VFBrvyo'
      }
    })
    if(response.status === 200){
      setBoard(response.data)
    }
  }
  // 컴포넌트가 처음 로드될때 한번만 api를 호출
  useEffect(()=>{
    apicall()
  },[])

  // 사용자가 입력필드에서 값을 바꾸면 실행됨
  // 사용자가 입력한 내용을 다시 board state에 업데이트
  // 그러면 변경된 내용이 화면에 나타남
  const handlerChange = (e) => {
    
    // 이벤트가 발생한 엘리먼트에서 데이터만 추출
    const {name, value, files} = e.target

    // 기존 게시물 복사
    const newBoard = {...board}

    // 특정 프로퍼티만 교체
    // 예: newBoard[title] = 'abc'
    // 엘리먼트가 가지고 있는 name을 key로 사용
    newBoard[name] = value

    // 상태 업데이트
    setBoard(newBoard)
  }

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
            <Form.Control type="text" name="title" value={board.title} onChange={handlerChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.content">
            <Form.Label>내용</Form.Label>
            <Form.Control as="textarea" name="content" rows={3} value={board.content} onChange={handlerChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.writer">
            <Form.Label>작성자</Form.Label>
            <Form.Control type="text" value={board.writer} readOnly/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="board.uploadFile">
            <Form.Label>이미지</Form.Label>
            <Form.Control type="file" name="uploadFile" onChange={handlerChange}/>
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