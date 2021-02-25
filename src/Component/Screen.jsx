import React from 'react';
import '../Component/Screen.scss';
import logo from "../Asserts/tummyicon.png";
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import VoiceChatIcon from '@material-ui/icons/VoiceChat';
import MicIcon from '@material-ui/icons/Mic';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import ChatItem from '../Component/ChatItem'
import '../Component/ChatContent.scss';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import ChatMenuOption from '../Component/ChatMenuOption'

export default class Screen extends React.Component {

    messagesEndReference = React.createRef(null);
 
      constructor(props) {
        super(props);
        this.state = {
          chat: this.chatItms,
          Chatmenu : this.ChatMenuButton,
          msg: "",
          min : 9,
          Max : 100000000,
        };
      }

      chatItms = [
        {
          key: 1,
          type: "",
          msg: "Hi Abhishek Sir, How are you?",
        },
        {
          key: 2,
          type: "other",
          msg: "I am fine. Vishal",
        },
        {
          key: 3,
          type: "other",
          msg: "What about you?",
        },
        {
          key: 4,
          type: "",
          msg: "Awesome Abhishek Sir.",
        },
        {
          key: 5,
          type: "other",
          msg: "How Chat System Going On?",
        },
        {
          key: 6,
          type: "",
          msg: "Very Well Sir.",
        },
        {
          key: 7,
          type: "other",
          msg: "Keep It up",
        },
      ];

      ChatMenuButton = [
        {   
            key: 1,
            type: "Fusion Tops"
        },
        {
            key: 2,
            type: "Saris"
        },
        {
            key: 3,
            type: "Ethnic"
        },
    ];

      scrollToBottom = () => {
          this.messagesEndReference.current.scrollIntoView({ behavior: "smooth" });
      }

      componentDidMount() {
          console.log("Track 1");
          window.addEventListener("keydown",(event) => {
              if(event.keyCode === 13){
                  console.log("Track 2",event.keyCode);
                    if (this.state.msg !== "") {
                        this.chatItms.push({
                            key: this.state.min + Math.random() * (this.state.max - this.state.min),
                            type: "",
                            msg: this.state.msg,
                        });
                        this.setState({ chat: [...this.chatItms]});
                        this.scrollToBottom();
                        this.setState({ msg: ""});
                    }
              }
          });
          this.scrollToBottom();
      }

      onStateChange = (event) => {
          this.setState({ msg: event.target.value});
      };

    render() {
        return (
            <div className="Container">
                <div className="MainContainer">
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
                    <div className="mainContainer">
                        <div className="content__body">
                            <div className="chat__items">
                                {this.state.chat.map((itm, index) => {
                                    return (
                                        <ChatItem
                                            key= {itm.key}
                                            user={itm.type ? itm.type : "me"}
                                            msg={itm.msg}
                                        />
                                    );
                                })}
                                <div ref={this.messagesEndReference}></div>
                            </div>
                        </div>
                        <div className="mainContainer_ButtonBody">
                            <div className="mainContainer_ButtonBody_Back">
                            <Button className="mainContainer_ButtonBody_BackButton"><ArrowLeftIcon fontSize="small"/>Back</Button>
                            </div>
                            <div className="mainContainer_ButtonBody_OptionMenu" >
                                
                            <div className="chat__MenuOption">
                                {this.state.Chatmenu.map((itm) => {
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
                    <div className="FooterContainer">
                        <div className="subFooterContainer">
                            <div className="subFooterContainer-Button">
                                <Button><MenuIcon style={{ color: 'white' }} /></Button>
                            </div>
                            <div className="subFooterContainer-Input">
                                <FormControl variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-weight"
                                        style={{ color: 'lightgray' }}
                                        placeholder="How can i help you?"
                                        onChange={this.onStateChange}
                                        value={this.state.msg}
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
                </div>
            </div>
        )
    }
}