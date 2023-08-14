import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import User from '../../components/user'
import { addUser, changeInput, clearUser, deleteUser } from '../../store/usersSlice'

function UsersPage() {

    const dispatch = useDispatch()

    const { inputValue, users } = useSelector(state => state.usersReducer)

    const changeInputFunc = (event) => {
        dispatch(changeInput(event.target.value))
    }

    const addUserFunc = () => {
        dispatch(addUser(inputValue))
    }

    return (
        <>
            <button onClick={addUserFunc}>add user</button>
            <input style={{marginTop: '60px'}} value={inputValue} type="text" placeholder="name" onChange={changeInputFunc}/>
            <button onClick={() => dispatch(clearUser())}>clear</button>
            <button style={{marginBottom: '40px'}} onClick={() => dispatch(deleteUser())}>delete all</button>

            {users.map(user => <User name={user} />)}
        </>
    )
}

export default UsersPage