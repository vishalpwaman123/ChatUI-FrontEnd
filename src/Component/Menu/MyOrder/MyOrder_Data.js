import React from 'react'
import '../../../Style/Menu/MyOrders.scss'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating'
import { makeStyles } from '@material-ui/core/styles';

function MyOrder_Data(props) {

    const path = props.image;
    return (
        <div className="MyOrder_Container">

            <div className="MyOrder_Header">
                <div className="MyOrder_Header_dateTime">
                    <div className="MyOrder_Header_dateTime_Header">Order date</div>
                    <div className="MyOrder_Header_dateTime_CurrentTime">{props.order_time}</div>
                </div>
                <div className="MyOrder_Header_Count">
                    <div className="MyOrder_Header_Count_Header">Item Count</div>
                    <div className="MyOrder_Header_Count_CurrentCount">{props.item}</div>
                </div>
                <div className="MyOrder_Header_Amount">
                    <div className="MyOrder_Header_Amount_Header">Amount</div>
                    <div className="MyOrder_Header_Amount_CurrentAmount">Rs. {props.amount}</div>
                </div>
            </div>
            <div className="MyOrder_MainContainer">
                <div className="MyOrder_MainContainer_Image">
                    <img src={path} alt="" width="80" height="80" className="MyOrder_MainContainer_Image_I" />
                </div>
                <div className="MyOrder_MainContainer_Detailed">
                    <div className="MyOrder_MainContainer_Detailed_Header">{props.product_name}</div>
                    <div className="MyOrder_MainContainer_Detailed_SizeColor">
                        <div className="MyOrder_MainContainer_Detailed_SizeColor_Size">Size : {props.size}</div>
                        <div className="MyOrder_MainContainer_Detailed_SizeColor_Color">Color : {props.color}</div>
                    </div>
                    <div className="MyOrder_MainContainer_Detailed_Price">
                        <div className="MyOrder_MainContainer_Detailed_Price_Header">IDR</div>
                        <div className="MyOrder_MainContainer_Detailed_Price_SalePrice">{props.selling_price}</div>
                        <div className="MyOrder_MainContainer_Detailed_Price_RealPrice">IDR &nbsp;{props.real_price}</div>
                    </div>
                </div>
            </div>
            <div className="MyOrder_MenuButton">
                <div className="MyOrder_MenuButton_Exchange"><Button className="MyOrder_MenuButton_Exchange_B">Exchange</Button></div>
                <div className="MyOrder_MenuButton_Return"><Button className="MyOrder_MenuButton_Return_B">Return</Button></div>
            </div>
            <div className="MyOrder_Rating" >
                <Rating name="size-large" size="large" />
            </div>

        </div>

    )
}

export default MyOrder_Data;