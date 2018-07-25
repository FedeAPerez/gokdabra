// SearchBusinessContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
/* *
 * Código de librerías internas
 * */ 
import { Text } from '../ComponentsLibrary/Text';
import { fbGetAllUsers } from '../firebase'; 
import UserDisplay from '../ComponentsLibrary/UserDisplay';
/* *
 * Hojas de Estilo y Constantes
 * */ 
class SearchBusinessContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersList : [],
            usersFetching : true
        }
    }

    componentDidMount() {
        const usersRef = fbGetAllUsers(this.props.user.user_name);
    
        usersRef
        .then((res) => {
            console.log(res.val());
            var keysList = Object.keys(res.val());
            var usersList = [];
            keysList.forEach(element => {
                console.log(res.val()[element]);
                usersList.push(res.val()[element]);
            });
            this.setState({ usersList : usersList });
        })
        .catch((err) => {
            console.log(err);
        });
    }
    render() {
        return (
            <section>                
                <Text centered lateralMargin>¡Estas son la personas y emprendedores que ya están usando KDABRA!</Text>
                {
                    this.state.usersList &&
                    this.state.usersList.map((element, index) => {
                        return (
                            <UserDisplay
                                key={ "user_display_" + index} 
                                userName={ element.user_name }  
                                userShowName ={ element.show_name }
                                userDescription={ element.user_description }
                                userTag={ element.user_tag }
                            />
                        );
                    })
                }
            </section>
        );
    };
}

export default SearchBusinessContainer;