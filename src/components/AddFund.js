import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddFund = (props) => {
    const [state,setState] = useState({amount: ""})
    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()
        props.updateFunc(Number(state.amount))
        setState({amount:""})
        navigate("/funds-added")
    }
    
  return (
    <div>
        <form className='add-fund-form' onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='Enter amount'
                value={state.amount}
                onChange={e => {setState({amount: e.target.value})}}
            ></input>
            <button>Add funds</button>
        </form>
    </div>
  )
}

export default AddFund
