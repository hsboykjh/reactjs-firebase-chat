import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import ChatRoomRDB from './ChatRoomRDB';
import ChatRoomFS from './ChatRoomFS';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/ChatRoomRDB' component={ChatRoomRDB}/>
            <Route path='/ChatRoomFS' component={ChatRoomFS}/>
        </Switch>
    </main>
);

export default Main
