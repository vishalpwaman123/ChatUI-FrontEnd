import React from 'react'
import '../../Style/SubContaint/Header.scss'
import logo from '../../Asserts/tummyicon.png'
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {

    return (
            <div className="HeaderContainer">
                <div className="subHeaderContainer">
                    <div className="subHeaderContainer-Text">
                        <div className="subHeaderContainer-Text1">TOMMY</div>
                        <div className="subHeaderContainer-TextImage"><img src={logo} alt="" width="20" height="10" /></div>
                        <div className="subHeaderContainer-Text1">HILFIGER</div>
                    </div>
                    <div className="subHeaderContainer-Button">
                        <div className="subHeaderContainer-Button1">
                            <IconButton aria-label="delete">
                                <FavoriteIcon style={{ color: 'white' }} />
                            </IconButton>
                        </div>
                        <div className="subHeaderContainer-Button1">
                            <IconButton aria-label="delete">
                                <ShoppingCartIcon style={{ color: 'white' }} />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Header
