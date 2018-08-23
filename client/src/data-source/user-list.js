import React, { Component } from 'react';
import User from './user';

class UserList extends Component {


    render(){
        let users = [];
        let stats = this.props.data;
        if (stats){
            console.log(stats);
            for (var i = 0; i < stats.length; i++){
                 users.push(
                     <User key={stats[i].accountId} userName={stats[i].epicUserHandle}/>
                );
            }
        }

        return (
            <ul>
                {users}
            </ul>
        )
    }
}
export default UserList;
