import React from 'react'
import "./homepage.styles.scss"
const Homepage = () =>
    ( < div >
        <div className = "directory-menu" >
            <div className = "menu-item">
                <div className = "content">
                    <h1 className="title">Hats</h1>
                    <span className="subtitle">Shop now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className="title">Jackets</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className="title">Sneakers</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className="title">Womans</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
            <div className = "menu-item">
                <div className = "content">
                    <h1 className="title">Mans</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
        </div> 
    </div>)

    export default Homepage;