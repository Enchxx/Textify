import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';
import {  } from 'react-router';
import {Link} from "react-router-dom";



const Login = () => {

    return (
        <div className={"formContainer"}>
            <div className={"formWrapper"}>
                <Form.Text className={"logo"}>Textify</Form.Text>
                <Form.Text className={"title"}>Logowanie</Form.Text>
                <Form className={"form"}>
                    <Form.Control className={"input"} placeholder={"Adres E-mail"} type={"email"}></Form.Control>
                    <Form.Control className={"input"} placeholder={"Hasło"} type={"password"}></Form.Control>
                    <Button className={"button"}>Zaloguj się</Button>
                </Form>
                <Form.Text className={"p"}>Nie masz konta? <Link to={"Register"}>Zarejestruj się</Link></Form.Text>
            </div>
        </div>
    );
}

export default Login;