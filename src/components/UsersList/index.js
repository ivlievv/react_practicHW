import React, {Component} from 'react';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import UserCard from '../UserCard';

class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users:[],
            error:null,
        };
    }

    componentDidMount() {
        this.setState( {
            isFetching:true,
        });
        setTimeout(() => {
            fetch('./users.json')
                .then(response => response.json())
                .then(users =>{
                this.setState({
                    users,
                    isFetching:false
                })

            })
                .catch(error =>{
                    this.setState({
                        error,
                        isFetching:false
                    })
                });
        },2000);
        fetch('./users.json')
    }

    render() {

        const {users, isFetching} = this.state;
        const userComponents = users.map( user => (
            <li key={user.id}>
                <UserCard user{}/>
            </li>));

        return(
            <ol className={styles.container}>
                {
                    userComponents
                }
                {
                    isFetching && <Spinner/>
                }
            </ol>
        )
    }
}

export default UsersList;