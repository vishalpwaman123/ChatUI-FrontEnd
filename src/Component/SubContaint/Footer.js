import React from 'react'
import '../../Style/SubContaint/Footer.scss'

import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import GTranslateOutlinedIcon from '@material-ui/icons/GTranslateOutlined';
import IconButton from '@material-ui/core/IconButton';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import RedeemIcon from '@material-ui/icons/Redeem';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MicIcon from '@material-ui/icons/Mic';
import FormControl from '@material-ui/core/FormControl';
import { useHistory } from "react-router-dom";

function Footer(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();

    const routeChange = () => {
        history.push('/MyOrders');
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
            <div className="FooterContainer">
                <div className="subFooterContainer">
                    <div className="subFooterContainer-Button">
                        <Button
                            aria-controls="subFooterContainer-Buttonmenu"
                            aria-haspopup="true"
                            onClick={handleClick}>
                            <MenuIcon style={{ color: 'white' }} />
                        </Button>
                        <Menu
                            className="subFooterContainer-menuButton"
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <div className="subFooterContainer-Menu">
                                <div className="subFooterContainer-Menu1">
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image1">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton1">
                                                <StorefrontIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">Change Store</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image2">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton2">
                                                <SmartphoneIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">Change Mobile</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image3">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton3">
                                                <TrendingUpIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">Visit Booking</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image4">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton4"
                                                onClick={routeChange}>
                                                <ListAltIcon className="ListAltIcon" />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">My Orders</div>
                                    </MenuItem>
                                </div>
                                <div className="subFooterContainer-Menu1">
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image5">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton5">
                                                <ShoppingCartOutlinedIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">Shopping Cart</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image6">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton6">
                                                <ListAltIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">Digital Reciept</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image7">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton7">
                                                <HourglassEmptyOutlinedIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">My Rewards</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image8">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton8">
                                                <RedeemIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu1-Text">More Offers</div>
                                    </MenuItem>
                                </div>
                                <div className="hrLine"><hr></hr></div>
                                <div className="subFooterContainer-Menu2">
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image9">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton9">
                                                <InvertColorsIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu2-Text">Change Color</div>
                                    </MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <div className="subFooterContainer-Menu1-Image10">
                                            <IconButton
                                                color="primary"
                                                aria-label="upload picture"
                                                component="span"
                                                className="IconButton10">
                                                <GTranslateOutlinedIcon />
                                            </IconButton>
                                        </div>
                                        <div className="subFooterContainer-Menu2-Text">Change Languagae</div>
                                    </MenuItem>
                                </div>
                            </div>
                        </Menu>
                    </div>
                    <div className="subFooterContainer-Input">
                        <FormControl variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-weight"
                                style={{ color: 'lightgray' }}
                                placeholder="How can i help you?"
                                onChange={props.ScreenCallBack}
                                value={props.msg}
                                className="InputField"
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            <MicIcon style={{ color: 'lightgray' }} />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={0}
                            />
                        </FormControl>
                    </div>
                    <div className="subFooterContainer-Button">
                        <Button><VoiceChatIcon style={{ color: 'white' }} /></Button>
                    </div>
                </div>
            </div>
    )
}

export default Footer
