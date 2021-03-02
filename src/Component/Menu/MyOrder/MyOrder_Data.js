import React from 'react'
import '../../../Style/Menu/MyOrders.scss'
import Button from '@material-ui/core/Button'
import Rating from '@material-ui/lab/Rating'
import images from '../../../Asserts/Image5.png'

function MyOrder_Data(props) {
    return (
        // <div className="MyOrder_Container">
        <div>
            <div className="MyOrder_Header">
                <div className="MyOrder_Header_dateTime">
                    <div className="MyOrder_Header_dateTime_Header">Order date</div>
                    <div className="MyOrder_Header_dateTime_CurrentTime">04/08/2020</div>
                </div>
                <div className="MyOrder_Header_Count">
                    <div className="MyOrder_Header_Count_Header">Item Count</div>
                    <div className="MyOrder_Header_Count_CurrentCount">4</div>
                </div>
                <div className="MyOrder_Header_Amount">
                    <div className="MyOrder_Header_Amount_Header">Amount</div>
                    <div className="MyOrder_Header_Amount_CurrentAmount">Rs. 3500</div>
                </div>
            </div>
            <div className="MyOrder_MainContainer">
                <div className="MyOrder_MainContainer_Image">
                    <img src={images} alt="" width="80" height="80" className="MyOrder_MainContainer_Image_I" />
                </div>
                <div className="MyOrder_MainContainer_Detailed">
                    <div className="MyOrder_MainContainer_Detailed_Header">Hanes Women's V-Notch pull....</div>
                    <div className="MyOrder_MainContainer_Detailed_SizeColor">
                        <div className="MyOrder_MainContainer_Detailed_SizeColor_Size">Size : S</div>
                        <div className="MyOrder_MainContainer_Detailed_SizeColor_Color">Color : Black</div>
                    </div>
                    <div className="MyOrder_MainContainer_Detailed_Price">
                        <div className="MyOrder_MainContainer_Detailed_Price_Header">IDR</div>
                        <div className="MyOrder_MainContainer_Detailed_Price_SalePrice">577,818</div>
                        <div className="MyOrder_MainContainer_Detailed_Price_RealPrice">IDR 677,848</div>
                    </div>
                </div>
            </div>
            <div className="MyOrder_MenuButton">
                <div className="MyOrder_MenuButton_Exchange"><Button className="MyOrder_MenuButton_Exchange_B">Exchange</Button></div>
                <div className="MyOrder_MenuButton_Return"><Button className="MyOrder_MenuButton_Return_B">Return</Button></div>
            </div>
            <div className="MyOrder_Rating">
                <Rating name="size-large" defaultValue={0} size="large" />
            </div>
        </div>

    )
}

export default MyOrder_Data;