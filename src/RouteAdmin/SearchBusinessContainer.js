// SearchBusinessContainer.js
/* *
 * Código de librerías externas
 * */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            var keysList = Object.keys(res.val());
            var usersList = [];
            keysList.forEach(element => {
                usersList.push(res.val()[element]);
            });
            this.setState({ usersList : usersList });
        })
        .catch((err) => {
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
                            <Link
                            key={ "user_display_link" + index}
                            to={ "/" + element.user_name}
                            >
                                <UserDisplay
                                    key={ "user_display_" + index} 
                                    userName={ element.user_name }  
                                    userShowName ={ element.show_name }
                                    userDescription={ element.user_description }
                                    userTag={ element.user_tag }
                                />
                            </Link>
                        );
                    })
                }
            </section>
        );
    };
}

export default SearchBusinessContainer;