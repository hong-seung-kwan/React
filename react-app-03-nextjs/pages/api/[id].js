// 새로운 API 추가

// 해당 API의 URL 주소: /api/1 또는 /api/2 또는 /api/aa
// 파일의 이름이 [id]인 것은 파라미터로 처리하겠다는 의미
// /api/1 => id: 1
// /api/aaa => id: aaa
// 마지막경로가 id라는 파라미터로 처리됨

// 매개변수 : request, response
// request: 사용자 요청을 담은 객체
// response: 응답데이터를 만드는 객체
function handler(req, res){
  // 응답 코드: 200 ok
  // 응답 데이터: json 데이터
  
  res.status(200).json( { id: req.query.id} )
}
export default handler;