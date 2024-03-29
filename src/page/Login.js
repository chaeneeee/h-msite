import React from 'react'
import {Form, Button, Container } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';


const Login = ({setAuthenticate}) => {
   const navigate = useNavigate()
  const loginUser= (event) => {
    //폼제출이아닌 단순히 버튼 클릭이벤트라 새로고침될 필요가 없다 그래서 새로고침되는 걸 막아야한다 
    event.preventDefault(); // 폼에서 자주쓰인다 리프레쉬 막기위해
    setAuthenticate(true);
    navigate('/')
  };


  return (
   <div>
    <Container>
        <Form onSubmit={(event)=>loginUser(event)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일을 입력해주세요</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호를 입력해주세요 </Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="danger" type="submit">
       로그인
      </Button>
    </Form>
    </Container>
    </div>  //form 형식과 폼안에 submit 백엔드로 제출되면서 새로고침이 된다 
    // 단순히 클릭이벤트와는 다르다  주의하기 form 안에 on submit쓰기 onclick 이벤트 주면 안된다. 
  );
}

  
  
export default Login
