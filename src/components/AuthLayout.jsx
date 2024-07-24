import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Protected = ({children, authentication}) => {
    const navigate =  useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
     if(authentication && authStatus !== authentication){
        navigate('/login')
     }else if(!authentication && authStatus !== authentication){
        navigate('/')
     }
     setLoader(false)
    }, [authentication, authStatus, navigate])
    
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Protected