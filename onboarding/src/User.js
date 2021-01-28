import React from 'react'

function User({ details }) {

  return (
    <div className='user'>
      <p>Name: {details.name}</p>
      <p>Email: {details.email}</p>
      <p>Password: {details.password}</p>
      <p>TermsOfService: {details.termsOfService}</p>
    </div>
  )
}

export default User
