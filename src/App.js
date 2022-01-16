import React from 'react'
import Header from './components/Header'
import Feed from './components/mainBody/feed/Feed'
import Sidebar from './components/mainBody/sidebar/Sidebar'
import './css/App.css'
import Login from './components/login/Login'
import { useSelector } from 'react-redux'

function App() {

    const user = useSelector((state) => state.user.value)

    return (
        <div className='app'>
            <Header></Header>

            {!user ? <Login></Login> : (
                <div className="app-body">
                    <Sidebar></Sidebar>
                    <Feed></Feed>
                </div>
            )}
        </div>
    )
}

export default App
