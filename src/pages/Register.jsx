import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form, Button } from 'react-bootstrap';
import {Link} from "react-router-dom";
// import AddAvatar from '../img/addAvatar.png';


const Register = () => {

    return (
        <div className={"formContainer"}>
            <div className={"formWrapper"}>
                <Form.Text className={"logo"}>Textify</Form.Text>
                <Form.Text className={"title"}>Rejestracja</Form.Text>
                <Form className={"form"}>
                    <Form.Control className={"input"} placeholder={"Imię"} type={"text"}></Form.Control>
                    <Form.Control className={"input"} placeholder={"Nazwisko"} type={"text"}></Form.Control>
                    <Form.Control className={"input"} placeholder={"Adres E-mail"} type={"email"}></Form.Control>
                    <Form.Control className={"input"} placeholder={"Hasło"} type={"password"}></Form.Control>
                    {/*<Form.Control type={"file"} name={"file"}></Form.Control>*/}
                    {/*<Form.Label htmlFor={"name"}>*/}

                    {/*</Form.Label>*/}
                    <Button className={"button"}>Zarejestruj się</Button>
                </Form>
                <Form.Text className={"p"}>Masz już konto? <link to={"Login"}>Zaloguj się</link></Form.Text>
            </div>
        </div>
    );
}

export default Register;