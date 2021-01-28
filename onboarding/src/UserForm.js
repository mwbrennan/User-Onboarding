import React, { useState, useEffect } from 'react';

export default function UserForm(props) {

    const { values, submit, change, disabled, errors } = props;
    

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
    
    return (
        <form onSubmit={onSubmit}>
            <div>
                <h2>Enter your info</h2>
                <button id='subBtn' disabled={disabled} >Submit</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>

                </div>
            </div>

            <div className='inputs'>
                <label>
                    Name 
                    <input 
                        value={values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <label>
                    Email
                    <input 
                        value={values.email}
                        onChange={onChange}
                        name='email'
                        type='text'
                    />
                </label>
                <label>
                    Password 
                    <input 
                        value={values.password}
                        onChange={onChange}
                        name='password'
                        type='text'
                    />
                </label>
                <label>
                    Terms of Service 
                    <input 
                        value={values.termsOfService}
                        onChange={onChange}
                        name='TermsOfService'
                        type='checkbox'
                    />
                </label>
            </div>
        </form>
    )
        
}
