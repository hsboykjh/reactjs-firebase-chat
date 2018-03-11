import React, { Component } from 'react';
import * as firebase from 'firebase';
import Moment from 'moment';

class ChatRoomRDB extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount() {
        firebase.database().ref('messages/').on('value', snapshot => {
            const currentMessages = snapshot.val();
            if (currentMessages != null) {
                this.setState({
                    messages: currentMessages
                });
            }
        });
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const newMessage = {
            text: this.state.message,
            createdAt: Date.now()
        };

        firebase.database().ref().child('messages').push(newMessage);
        this.setState({
            message: ''
        });
    }

    render() {
        const { messages } = this.state;

        // console.log("messages : ",messages);
        const messagesList = Object.keys(messages).map((key, index) => {
            if(index %2 === 0){
                return (<div className="chat-container" key={key}>{messages[key].text}<span className="time-right">{Moment(messages[key].createdAt).format("hh:mm:ss DD/MM/YYYY")}</span></div>);
            }else{
                return (<div className="chat-container darker" key={key}>{messages[key].text}<span className="time-right">{Moment(messages[key].createdAt).format("hh:mm:ss DD/MM/YYYY")}</span></div>);
            }
        });

        // console.log("messagesList : ",messagesList);

        return(
            <div className="App-container">
                <div className="App-header">
                    <div>Chat App ( Realtime Database )
                    </div>
                </div>
                <div>
                    <div className="App-messages">
                        <div>
                            {messagesList}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="App-input">
                        <div className="App-input-container">
                            <form className="form-group" onSubmit={this.handleSubmit.bind(this)}>
                                <div className="App-form">
                                    <div className="App-form-input">
                                        <input
                                            className="form-control"
                                            onChange={this.updateMessage.bind(this)}
                                            value={this.state.message}
                                            placeholder="Message"
                                            type="text" />
                                    </div>
                                    <div className="App-form-button">
                                        <button
                                            className="btn btn-primary"
                                            onClick={this.handleSubmit.bind(this)}>
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChatRoomRDB;