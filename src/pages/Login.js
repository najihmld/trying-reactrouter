import React from "react";
import axios from 'axios';
import qs from 'qs';

export default class Login extends React.Component {
    // letak fungsi
            componentDidMount() {
                console.log('Ini adalah componen did mount')
            }
    
            constructor(props) {
                super(props);
                this.state = {
                    username: '',
                    password: ''
                }
            }

            handleUsername = (event) => {
                let localUsername = event.target.value
                this.setState({
                    username: localUsername
                })
            }

            handlePassword = (event) => {
                let localPassword = event.target.value
                this.setState({
                    username: localPassword
                })
            }

            handleSubmitLogin = (event) => {
                // console.log(this.state.username);
                event.preventDefault();
                const data = {
                    username: this.state.username,
                    password: this.state.password
                }
                //unttuk url encoded
                if(this.state.username === "" && this.state.password === "") {
                    alert("Username dan Password tidak boleh kosong")
                } else{
                    const body = qs.stringify(data)
                    axios.post('http://127.0.0.1:3002/auth/login/', body) 
                    .then(res => {
                        console.log(res);
                        if(res.status === 200) {
                            // simpan data res
                            try{
                                localStorage.setItem('dataAccount', JSON.stringify(res.data.data))
                                //lalu navigasi ke home
                                this.props.history.push('/home')
                            } catch (err) {
                                console.log(err);  
                            }
                        } else{
                            // muncul notif error

                        }
                    })
                    .catch(err => {
                        console.log(err);
                    })
                }
            }

    render() {
        // letak console
        // console.log(this.state.username);
        // console.log(this.state.password);
        return(
            <div>
                <form>
                    <input  type='text' placeholder = "username" onChange={(event) => this.handleUsername(event)} />
                    <input  type='password' placeholder = "password" onChange={(event) => this.handlePassword(event)}/>
                    <button onClick={(event) => this.handleSubmitLogin(event)} type='submit'>Login</button>
                </form>
            </div>
        )
    }
}