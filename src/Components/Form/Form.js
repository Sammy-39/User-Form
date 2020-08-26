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
    
    onFieldChange= (event) =>{
        this.setState({[event.target.name]: event.target.value});
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
                    name = "Name" 
                    placeholder="Enter your Name" 
                    className="input-style"
                    onChange={this.onFieldChange} />

                    <input type="text"
                    value = {this.state.Email}
                    name = "Email"   
                    placeholder="Enter your Email" 
                    className="input-style"
                    onChange={this.onFieldChange} />

                    <input type="text"
                    value = {this.state.PhoneNumber}
                    name = "PhoneNumber"  
                    placeholder="Enter your PhoneNumber" 
                    className="input-style"
                    onChange={this.onFieldChange} />

                    <select className="input-style" 
                    value = {this.state.Gender} 
                    name = "Gender"
                    onChange={this.onFieldChange}>
                        <option value=""> Choose Gender </option>
                        <option value="Male"> Male </option>
                        <option value="Female"> Female </option>
                    </select>    

                    <input type="password"
                    value = {this.state.Password}
                    name = "Password"  
                    placeholder="Enter your Password" 
                    className="input-style"
                    onChange={this.onFieldChange} />

                    <button className="submit-btn" 
                    onClick={this.onBtnClick}> Submit </button> 

            </div>
        );
    };
}

export default Form;