import React, { Component } from 'react';
import * as firebase from 'firebase';
import '@firebase/firestore';
import Moment from "moment/moment";

class ChatRoomFS extends Component {

    constructor() {
        super();
        this.state = {
            message: '',
            messages: []
        }
    }

    componentDidMount() {

        const db = firebase.firestore();
        const self = this;
        db.collection("messages").doc("message1").onSnapshot(function(querySnapshot) {
            // console.log('Data is changed : ', querySnapshot.data());
            let messageList = [];
            if(querySnapshot.data() && querySnapshot.data().messages){
                messageList = querySnapshot.data().messages;
            }

            // console.log('final messageList : ', messageList);
            self.setState({
                messages: messageList
            });
        });
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value
        })
    }

    handleSubmit(e) {
        const db = firebase.firestore();
        e.preventDefault();
        const newMessage = {
            text: this.state.message,
            createdAt: Date.now()
        };
        let messages = this.state.messages;
        messages.push(newMessage);

        const docData = {
            messages: messages
        };

        db.collection("messages").doc("message1").update(docData).then(function() {
            console.log("Document successfully written!");
        }).catch((err) => {
            console.log("Document update failed! : ", err);
        });

        this.setState({
            message: ''
        });
    }

    render() {
        const { messages } = this.state;

        console.log("firestore messages : ",messages);
        const messagesList = Object.keys(messages).map((key, index) => {
            if(index %2 === 0){
                return (<div className="chat-container" key={key}>{messages[key].text}<span className="time-right">{Moment(messages[key].createdAt).format("hh:mm:ss DD/MM/YYYY")}</span></div>);
            }else{
                return (<div className="chat-container darker" key={key}>{messages[key].text}<span className="time-right">{Moment(messages[key].createdAt).format("hh:mm:ss DD/MM/YYYY")}</span></div>);
            }
        });

        // console.log("firestore messagesList : ",messagesList);

        return(
            <div className="App-container">
                <div className="App-header">
                    <div>Chat App ( Firestore )
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
export default ChatRoomFS;