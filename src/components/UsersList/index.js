import React, {Component} from 'react';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import UserCard from '../UserCard';
import stylesCard from '../UserCard/style.css'

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
                <div className="userContainer">
                    <img className="imgContainer" src={user.imageSrc} alt=""/>

                </div>
                <div className="name">
                    <h4>{user.firsName}</h4>
                    <h4>{user.lastName}</h4>
                </div>


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