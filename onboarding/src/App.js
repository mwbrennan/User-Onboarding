import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import * as yup from 'yup';
import axios from 'axios';
import schema from './formSchema';
const initialValues = {
    name: '',
    email: '',
    password: '',
    termsOfService: false,
};

const initialFormErrors = {
    name: '',
    email: '',
    password: '',
    termsOfService: '',
};

const initialUsers = [];
const initialDisabled = true;

export default function App() {
    const [users, setUsers] = useState(initialUsers);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);


    const getUser = () => {
      axios
        .get("https://reqres.in/api/users")
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);

        });
    };


    const postNewUser = (newUser) => {
        axios  
            .post('https://reqres.in/api/users', newUser)
            .then((res) => {
                setUsers([res.data, ...users]);
                setFormValues(initialFormErrors);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const inputChange = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                }).catch((err) => {
                    setFormErrors({
                        ...formErrors,
                        [name]: err.errors[0],
                    })
                })
            })
        setFormValues({
            ...formValues,
            [name]: value,
        })
    };

    const formSubmit = () => {
        const newUser = {
            name: formValues.name.trim(),
            email: formValues.email.trim(),
            password: formValues.password.trim(),
            termsOfService: formValues.termsOfService
        }
        postNewUser(newUser);
    };

    useEffect(() => {
        getUser();
    }, []);

    useEffect(() => {
        schema.isValid(formValues).then((valid) => {
          setDisabled(!valid)
        });
    }, [formValues]);

    return (
        <div className='container'>
            <header>
                <h1>Create your account</h1>
            </header>


            <UserForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />

        

{users.map((user) => {
        return <User key={user.id} details={user} />;
      })}

        </div>
    );



}



