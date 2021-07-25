import React from "react";
import {withRouter} from "react-router-dom";

class Add extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            address:'',
            telephone:''
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

        let customers = JSON.parse(localStorage.getItem('customers')) ?? [];

        customers.push(this.state);

        localStorage.setItem('customers', JSON.stringify(customers))

        this.props.history.push('/clientes');
    }

    render() {
        return (
            <>
                <header>
                    <h1>Adicionar novo cliente</h1>
                </header>
                
                <form onSubmit={this.save}>
                    <input value={this.state.name} onChange={this.inputChange} name="name" type="text" placeholder="Nome" required="required"/>
                    <input value={this.state.email} onChange={this.inputChange} name="email" type="email" placeholder="Email" required="required"/>
                    <input value={this.state.address} onChange={this.inputChange} name="address" type="text" placeholder="Endereço" required="required"/>
                    <input value={this.state.telephone} onChange={this.inputChange} name="telephone" type="text" placeholder="Telefone" pattern="\d*" minlength="10" maxlength="11"required="required"/>
                    <button>Adicionar</button>
                </form>
            </>
        );
    }
}

export default withRouter(Add);