import React from 'react'
import Header from './components/Header'
import Sidebar from './components/mainBody/sidebar/Sidebar'
import './css/App.css'

function App() {
    return (
        <div className='app'>
            <Header></Header>

            <div className="app-body">
                <Sidebar></Sidebar>
                {/* feed */}
                {/* right widgets */}
            </div>
        </div>
    )
}

export default App
