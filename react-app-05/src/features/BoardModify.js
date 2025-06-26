import { CustomCard, CustomContainer } from "../components/styles"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// 게시물 수정 화면
// 기존 게시물 데이터 조회
// 일부 데이터 수정 가능
// 수정 버튼을 클릭하면 게시물 데이터 업데이트

const BoardModify = () => {

  const token = useSelector((state) => state.member.token);

  const navigate = useNavigate();

  let [board, setBoard] = useState(null)

  // api 기본 주소 가져오기
  const { host } = useContext(Context)

  // URL 주소에 포함되어 있는 no 파라미터 꺼내기
  const params = useParams()
  useEffect(() => {
    // axios를 사용해서 게시물 단건 조회 api 호출
    const apicall = async () => {
      // 인자: URL주소, 헤더
      const response = await axios.get(`${host}/board/read?no=${params.no}`, {
        headers: {
          Authorization: token
        }
      });
      if (response.status !== 200) {
        throw new Error(`api error: ${response.status} ${response.statusText}`);
      } else {
        setBoard(response.data);
      }
    }
    // 컴포넌트가 처음 로드될때 한번만 api를 호출

    apicall()
  }, [])

  // 사용자가 입력필드에서 값을 바꾸면 실행됨
  // 사용자가 입력한 내용을 다시 board state에 업데이트
  // 그러면 변경된 내용이 화면에 나타남
  const handleChange = (e) => {

    // 이벤트가 발생한 엘리먼트에서 데이터만 추출
    const { name, value, files } = e.target

    // 기존 게시물 복사
    const newBoard = { ...board }

    if(name === 'uploadFile'){
      newBoard[name] = files[0];
    } else {
      newBoard[name] = value;
    }

    // 상태 업데이트
    setBoard(newBoard)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    formData.append('no', board.no)
    formData.append('title', board.title)
    formData.append('content', board.content)
    if(board.uploadFile != null){
      formData.append('uploadFile', board.uploadFile)
    }

    const response = await axios.put(
      `${host}/board/modify`,
      formData,
      {
        headers: {
          Authorization: token
        }
      }
    );

    if (response.status !== 204) {
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    } else {
      navigate(`/board/read/${board.no}`);
    }
  }

  const handleRemove = async () => {
    const no = board.no;

    const response = await axios.delete(
      `${host}/board/remove?no=${no}`,
      {
        headers: {
          Authorization: token
        }
      }
    );

    if(response.status !== 204){
      throw new Error(`api error: ${response.status} ${response.statusText}`);
    } else {
      navigate(`/board/list`);
    }
  }


  return (
    <CustomCard>
      <CustomContainer>
        <h3>게시물 수정</h3>{
           
        board!==null &&   

        <form onSubmit={handleSubmit}>
        <Form.Group controlId="board.title">
          <Form.Label>제목</Form.Label>
          <Form.Control type="text" name='title' value={board.title} onChange={handleChange}></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.content">
          <Form.Label>내용</Form.Label>
          <Form.Control as="textarea" rows={3} name='content' value={board.content} onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="board.writer">
          <Form.Label>작성자</Form.Label>
          <Form.Control type="text" value={board.writer} disabled ></Form.Control>
        </Form.Group>
        <Form.Group controlId="board.uploadFile">
          <Form.Label>이미지</Form.Label>
          <Form.Control type="file" name="uploadFile" onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId="board.regDate">
            <Form.Label>등록일</Form.Label>
            <Form.Control type="text" value={board.regDate} disabled readOnly></Form.Control>
        </Form.Group>   
        <Form.Group controlId="board.modDate">
            <Form.Label>수정일</Form.Label>
            <Form.Control type="text" value={board.modDate} disabled readOnly></Form.Control>
        </Form.Group>  
        <Button variant="secondary" type='submit'>수정</Button>
        <Button variant="secondary" onClick={handleRemove}>삭제</Button>
        </form>
        }
      </CustomContainer>
    </CustomCard>
  )
}

export default BoardModify