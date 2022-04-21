import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'));
    }
    update(field){
        return e => {
            this.setState({[field]:e.target.value});
        };
    }

    render(){
        const errors = this.props.errors ? (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        ) : (null)
        return (
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit} className='login-form-box'>
                    Welcome to BenchBnB!
                    <br />
                    Please {this.props.formType} or {this.props.navLink}
                    {errors}
                    <div className="login-form">
                        <br />
                        <label>Username
                            <input type="text" onChange={this.update('username')} className='login-input'/>
                        </label>
                        <label>Password
                            <input type="text" onChange={this.update('password')} className='login-input'/>
                        </label>
                        <br />
                        <input type="submit" className="session-submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm;