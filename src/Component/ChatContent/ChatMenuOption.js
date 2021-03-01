import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import '../../Style/ChatContent/ChatContent.scss'

export default class ChatMenuOption extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <div className="chat__itemMenu__content">
                    <Button className="chat__Menu">{this.props.type}</Button>
                </div>
    );
  }
}
