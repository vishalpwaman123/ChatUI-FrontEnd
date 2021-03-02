import React from 'react';
import ChatMenuOption from '../ChatContent/ChatMenuButton'
import ChatItem from '../ChatContent/ChatItem'
import '../../Style/ChatContent/ChatContent.scss'
import '../../Style/MainScreen/Screen.scss'
import Button from '@material-ui/core/Button';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import Footer from '../SubContaint/Footer.js'
import Header from '../SubContaint/Header'

export default class Screen extends React.Component {

    messagesEndReference = React.createRef(null);

    constructor(props) {
        super(props);
        this.state = {
            chat: this.chatItms,
            Chatmenu: this.ChatMenuButton,
            anchorEl: null,
            msg: "",
            min: 9,
            Max: 100000000,
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
        window.addEventListener("keydown", (event) => {
            if (event.keyCode === 13) {
                console.log("Track 2", event.keyCode);
                if (this.state.msg !== "") {
                    this.chatItms.push({
                        key: this.state.min + Math.random() * (this.state.max - this.state.min),
                        type: "",
                        msg: this.state.msg,
                    });
                    this.setState({ chat: [...this.chatItms] });
                    this.scrollToBottom();
                    this.setState({ msg: "" });
                }
            }
        });
        this.scrollToBottom();
    }

    onStateChange = (event) => {
        this.setState({ msg: event.target.value });
    };

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        return (
            <div className="Container">
                <div className="MainContainer">
                    <Header />
                    <div className="mainContainer">
                        <div className="content__body">
                            <div className="chat__items">
                                {this.state.chat.map((itm) => {
                                    return (
                                        <ChatItem
                                            key={itm.key}
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
                                <Button className="mainContainer_ButtonBody_BackButton"><ArrowLeftIcon fontSize="small" />Back</Button>
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
                    <Footer msg={this.state.msg} ScreenCallBack={this.onStateChange} />
                </div>
            </div>
        )
    }
}