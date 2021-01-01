import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./../styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {

    event.preventDefault();

    if (validateForm())
    {
      if(email==='abc@gmail.com' &&  password==='1234') 
      {
        //console.log('welcom');
        localStorage.setItem('login', 'true');
        window.location.replace('http://localhost:3000');
      }
      else
      {
        alert('login faild');
      }
    }
    else
    {
      alert('plz enter email && password');
    }
    //setEmail(prevAnswer => prevAnswer === "abc@example.com" ? "yes" : "plz enter true email")
    //setPassword(prevAnswer => prevAnswer === "1234" ? "yes" : "no")
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}