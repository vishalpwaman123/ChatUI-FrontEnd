import React, { Component } from 'react'
import '../../../Style/Menu/MyOrders.scss'
import Header from '../../SubContaint/Header'
import Footer from '../../SubContaint/Footer'
import MyOrder_Data from './MyOrder_Data'

import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
// import ChatMenuOption from '../ChatContent/ChatMenuButton'
import ChatMenuOption from '../../ChatContent/ChatMenuButton'

export class MyOrders extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            order: this.orderItms,
            ordermenu: this.orderMenuButton,
        };
    }

    orderItms = [
        {
            key: 1,
            order_time: "04/08/2020",
            item: 3,
            amount: 4000,
            image: require('C:/Users/Vishal/Documents/Easy/UI/Chat/demoproject/src/Asserts/Image2.png').default,
            product_name: "Hanes Men's V-Notch pull",
            size: "S",
            color: "Grey",
            selling_price: 500000,
            real_price: 600000,

        },
        {
            key: 2,
            order_time: "04/08/2020",
            item: 4,
            amount: 3500,
            image: require('C:/Users/Vishal/Documents/Easy/UI/Chat/demoproject/src/Asserts/Image5.png').default,
            product_name: "SweetShirt Man",
            size: "XL",
            color: "White",
            selling_price: 577818,
            real_price: 677848,
        },
        {
            key: 3,
            order_time: "04/08/2020",
            item: 10,
            amount: 3500,
            image: require('C:/Users/Vishal/Documents/Easy/UI/Chat/demoproject/src/Asserts/kids.webp').default,
            product_name: "Kids T-shirt",
            size: "M",
            color: "Purple",
            selling_price: 577818,
            real_price: 677848,
        },
    ];

    orderMenuButton = [
        {
            key: 1,
            type: "Filter"
        },
    ];

    render() {
        return (
            <div>
                <div className="Container">
                    <div className="MainContainer">
                        <Header />
                        <div className="mainContainer">
                            <div className="myorder_Body">
                                <div className="myorder_BodyContain">

                                    {this.state.order.map((itm) => {
                                        return (
                                            <MyOrder_Data
                                                key={itm.key}
                                                order_time={itm.order_time}
                                                item={itm.item}
                                                amount={itm.amount}
                                                image={itm.image}
                                                product_name={itm.product_name}
                                                size={itm.size}
                                                color={itm.color}
                                                selling_price={itm.selling_price}
                                                real_price={itm.real_price}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="mainContainer_ButtonBody">
                                <div className="mainContainer_ButtonBody_Back">
                                    <Button className="mainContainer_ButtonBody_BackButton"><ArrowLeftIcon fontSize="small" />Back</Button>
                                </div>
                                <div className="mainContainer_ButtonBody_OptionMenu" >

                                    <div className="chat__MenuOption">
                                        {this.state.ordermenu.map((itm) => {
                                            return (
                                                <ChatMenuOption
                                                    key={itm.key}
                                                    type={itm.type}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default MyOrders


// function MyOrders() {
//     return (
//         <div className="Container">
//             <div className="MainContainer">
//                 <Header />
//                 <div className="mainContainer">
//                     <div className="MyOrder_Container">
//                         <div className="MyOrder_Header">
//                             <div className="MyOrder_Header_dateTime">
//                                 <div className="MyOrder_Header_dateTime_Header">Order date</div>
//                                 <div className="MyOrder_Header_dateTime_CurrentTime">04/08/2020</div>
//                             </div>
//                             <div className="MyOrder_Header_Count">
//                                 <div className="MyOrder_Header_Count_Header">Item Count</div>
//                                 <div className="MyOrder_Header_Count_CurrentCount">4</div>
//                             </div>
//                             <div className="MyOrder_Header_Amount">
//                                 <div className="MyOrder_Header_Amount_Header">Amount</div>
//                                 <div className="MyOrder_Header_Amount_CurrentAmount">Rs. 3500</div>
//                             </div>
//                         </div>
//                         <div className="MyOrder_MainContainer">
//                             <div className="MyOrder_MainContainer_Image">
//                                 <img src={images} alt="" width="80" height="80" className="MyOrder_MainContainer_Image_I"/>
//                             </div>
//                             <div className="MyOrder_MainContainer_Detailed">
//                                 <div className="MyOrder_MainContainer_Detailed_Header">Hanes Women's V-Notch pull....</div>
//                                 <div className="MyOrder_MainContainer_Detailed_SizeColor">
//                                     <div className="MyOrder_MainContainer_Detailed_SizeColor_Size">Size : S</div>
//                                     <div className="MyOrder_MainContainer_Detailed_SizeColor_Color">Color : Black</div>
//                                 </div>
//                                 <div className="MyOrder_MainContainer_Detailed_Price">
//                                     <div className="MyOrder_MainContainer_Detailed_Price_Header">IDR</div>
//                                     <div className="MyOrder_MainContainer_Detailed_Price_SalePrice">577,818</div>
//                                     <div className="MyOrder_MainContainer_Detailed_Price_RealPrice">IDR 677,848</div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="MyOrder_MenuButton">
//                             <div className="MyOrder_MenuButton_Exchange"><Button className="MyOrder_MenuButton_Exchange_B">Exchange</Button></div>
//                             <div className="MyOrder_MenuButton_Return"><Button className="MyOrder_MenuButton_Return_B">Return</Button></div>
//                         </div>
//                         <div className="MyOrder_Rating">
//                             <Rating name="size-large" defaultValue={0} size="large" />
//                         </div>
//                     </div>
//                 </div>
//                 <Footer />
//             </div>
//         </div>
//     )
// }