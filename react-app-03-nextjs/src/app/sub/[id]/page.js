// 컴포넌트 함수 정의
// next 프로젝트에는 프론트와 백엔드 컴포넌트 존재
// useParams는 프론트 컴포넌트에서만 사용할 수 있는 기능

// 이 파일은 프론트 파일이라는 표시
'use client'

import { useParams } from 'next/navigation'
import React from 'react'

const Id = () => {

  // URL 주소에 있는 파라미터 추출
  // /sub/1/sub/2에서 1과 2는 id라는 파라미터로 처리됨
  // /sub/[id] => 파라미터 처리

  const params = useParams()
  console.log(params.id)

  return (
    <>
      <h1>/app/sub/[id]/page.js</h1>
      <a href='/'>/app/page.js</a>
      {/* id 파라미터를 화면에 표시 */}
      <p> parameter id : {params.id} </p>
    </>
  )
}

export default Id