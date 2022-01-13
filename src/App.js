import React from 'react'
import Header from './components/Header'
import Feed from './components/mainBody/feed/Feed'
import Sidebar from './components/mainBody/sidebar/Sidebar'
import './css/App.css'

function App() {
    return (
        <div className='app'>
            <Header></Header>

            <div className="app-body">
                <Sidebar></Sidebar>
                <Feed></Feed>
                {/* right widgets */}
            </div>
        </div>
    )
}

export default App
