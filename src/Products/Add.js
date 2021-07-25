import React from "react";
import {withRouter} from "react-router-dom"

class Add extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id:'',
            name:'',
            quantity:'',
            price:''
        }
        this.inputChange = this.inputChange.bind(this);
        this.save = this.save.bind(this)
    }
    inputChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    save(e){
        e.preventDefault();

        let products = JSON.parse(localStorage.getItem('products')) ?? [];

        products.push(this.state);

        localStorage.setItem('products', JSON.stringify(products))

        this.props.history.push('/estoque');
    }

    render() {
        return (
            <>
                <header>
                    <h1>Adicionar novo produto</h1>
                </header>

                <form onSubmit={this.save}>
                    <input  value={this.state.id} onChange={this.inputChange} name="id" type="id" placeholder="ID001" required="required"/>
                    <input value={this.state.name} onChange={this.inputChange} name="name" type="name" placeholder="Nome"required="required"/>
                    <input value={this.state.quantity} onChange={this.inputChange} name="quantity" type="number" placeholder="Quantidade" pattern="\d*" required="required" min="1"/>
                    <input value={this.state.price} onChange={this.inputChange} name="price" type="number" placeholder="R$ 100,00" required="required"  min="1" step="0.01" pattern="^\d*(\,\d{0,2})?$"/>
                    <button>Adicionar</button>
                </form>                
            </>
        );
    }
}

export default withRouter(Add);