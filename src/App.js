import React from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header'
import Login from './components/login/Login'
import Feed from './components/mainBody/feed/Feed'
import Sidebar from './components/mainBody/sidebar/Sidebar'
import './css/App.css'
import { selectUser } from './reduxStore/UserSlice'

function App() {

    const user = useSelector(selectUser)

    return (
        <div className='app'>
            <Header></Header>

            {user ? (<div className="app-body">
                <Sidebar></Sidebar>
                <Feed></Feed>
            </div>) : <Login></Login>}
        </div>
    )
}

export default App
