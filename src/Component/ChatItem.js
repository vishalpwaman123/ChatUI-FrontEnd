import React, { Component } from "react";
import '../Component/ChatContent.scss'

export default class ChatItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={`chat__item ${this.props.user ? this.props.user : ""}`}>
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>10 mins ago</span>
            <span>Seen 12:05PM</span>
          </div>
        </div>
      </div>
    );
  }
}
