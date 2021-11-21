import React from 'react'

import Sidebar from '../components/Sidebar'

const PrivateLayaut = ({ children }) => {
    return (
        <div className="flex flex-col justify-between h-screen">
            <Sidebar />
            {children}
            PRIVATE LAY0UT!!!!!!!!
        </div>
    )
}

export default PrivateLayaut