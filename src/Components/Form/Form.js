import React from 'react';

import "./style.css";

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name: "",
            Email: "",
            PhoneNumber: "",
            Gender: "",
            Password: ""
        }
    }

    onNameChange = (event) =>{
        this.setState({Name: event.target.value});
    };

    onEmailChange = (event) =>{
        this.setState({Email: event.target.value});
    };

    onPhoneChange = (event) =>{
        this.setState({PhoneNumber: event.target.value});
    };

    onGenderChange = (event) =>{
        this.setState({Gender: event.target.value});
    };

    onPasswordChange = (event) =>{
        this.setState({Password: event.target.value});
    };

    onBtnClick = (event) =>{
        window.alert("Name: " + this.state.Name + 
        "\n Email: " + this.state.Email +
        "\n PhoneNumber: " + this.state.PhoneNumber +
        "\n Gender: " + this.state.Gender +
        "\n Password: " + this.state.Password)

        this.clearForm();
    };

    clearForm = () =>{
        this.setState(
            {
                Name: "",
                Email: "",
                PhoneNumber: "",
                Gender: "",
                Password: ""
            }
        );
    };

    render = () =>{
        return(
            <div className="form-container">
                
                <p className="title"> ------- User Form ------- </p>

                    <input type="text"
                    value = {this.state.Name} 
                    placeholder="Enter your Name" 
                    className="input-style"
                    onChange={this.onNameChange} />

                    <input type="text"
                    value = {this.state.Email}  
                    placeholder="Enter your Email" 
                    className="input-style"
                    onChange={this.onEmailChange} />

                    <input type="text"
                    value = {this.state.PhoneNumber}  
                    placeholder="Enter your PhoneNumber" 
                    className="input-style"
                    onChange={this.onPhoneChange} />

                    <select className="input-style" value = {this.state.Gender} 
                    onChange={this.onGenderChange}>
                        <option value=""> Choose Gender </option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                    </select>    

                    <input type="password"
                    value = {this.state.Password}  
                    placeholder="Enter your Password" 
                    className="input-style"
                    onChange={this.onPasswordChange} />

                    <button className="submit-btn" 
                    onClick={this.onBtnClick}> Submit </button> 

            </div>
        );
    };
}

export default Form;