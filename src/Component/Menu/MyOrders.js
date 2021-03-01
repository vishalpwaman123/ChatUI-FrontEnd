import React from 'react'
import '../../Style/Menu/MyOrders.scss'
import Header from '../SubContaint/Header'
import Footer from '../SubContaint/Footer'

function MyOrders() {
    return (
        <div className="Container">
            <div className="MainContainer">
                <Header />
                <div className="mainContainer">
                    <div className="My_Order_Contact">
                        <div className="chat__msg"></div>
                        <div className="chat__meta">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default MyOrders;