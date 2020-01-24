import React, { Component } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap'


class Order extends Component {
    componentDidMount(){
        this.getListOrder()
    }

    state = {
        dataProduct: [],
        isLoading: false,
        cart: []
    }

    getListOrder = () => {
        this.setState({isLoading: true})
        axios.get('http://127.0.0.1:3002/products')
        .then(res => {
            this.setState({dataProduct: res.data.data})
            console.log(res.data.data);
            
        })
        .catch(err => {
            console.log(err);
            
        })
        .finally(() => {
            // this.setState({isLoading: false})
            setTimeout(() => {
                this.setState({isLoading: false})
            }, 3000)
        })

    }

    onSelectProduct = (event, item) => {
        event.preventDefault()
        // console.log(item);
        this.setState({
            cart: [...this.state.cart, item]
        })
        
    }

    render() {
        console.log(this.state.cart);
        return (
            this.state.isLoading ? (
                <Spinner color="primary"/>
            ): (
                this.state.dataProduct.map((item, index) => {
                    return(
                        <a  key={item.id} onClick={(event) => this.onSelectProduct(event, item)} href="javascript:void(0)">
                        <div>
                            <p>{item.id}</p>
                            <p>{item.name}</p>
                            <img alt="" src="https://cdns.klimg.com/merdeka.com/i/w/news/2017/09/06/883756/670x335/cara-membuat-nasi-goreng-spesial-dan-rumahan-yang-enak-sederhana-serta-mudah-rev-1.jpg" />
                        </div>
                        </a>
                    )
                })
            )
        )
    }
}

export default Order;