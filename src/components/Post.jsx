import React from 'react'
import { Routes,Route, useParams } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'

function Post() {

    const params = useParams()
    const navigate = useNavigate()
    const status = 200

    const onClick = () => {
         console.log('hello')
         navigate('/post/show')
    }

    if(status === 404){
        return <Navigate to='/error' />
    }

    return (
    <div>
        <h1>POST : {params.id} </h1>
        <button onClick={onClick}> Click kr </button>

        <Routes> 
            <Route path='/show' element={
                <h1>Show post</h1>
            } />
        </Routes>

    </div>
  )
}

export default Post