import React from 'react'
import { useParams } from 'react-router-dom'

const EmailVerification = () => {
    const {token} = useParams()
  return (
      <h1>This is the token: {token}</h1>
  )
}

export default EmailVerification