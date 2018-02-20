import React, {Component} from 'react';
import $ from 'jquery';
import 'parsleyjs';

class InputGroup extends Component {
    render() {
        return (
            <div>
                <div className="input-group">
                    <label htmlFor={this.props.id}>{this.props.label}</label>{' '}
                    <input type={this.props.type} name={this.props.name} id={this.props.id} placeholder={this.props.placeholder}
                           required={this.props.required} data-parsley-required-message={this.props.requiredMessage}/>
                </div>
                <span className="input-helper feedback"/>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    componentDidMount(){
        this.parsley = $(this.form).parsley({
            errorsWrapper: '<div></div>',
            errorTemplate: '<span></span>',
            errorsContainer: function (Field) {
                let $el = Field.$element.parent().find('+ .input-helper.feedback');
                if(!$el.length) {
                    $el = $(`<span class="input-helper feedback"/>`);
                    Field.$element.parent().after($el);
                }
                return $el;
            }
        });

    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.parsley.whenValidate()
            .then(function () {
                console.log("submitted");
            });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit} ref={(form) => { this.form = form; }}>
                <InputGroup type="email" id="email" name="email" label="Email" placeholder="example@email.com"
                            required="true" requiredMessage="Email is required!"/>
                <InputGroup type="password" id="password" name="password" label="Password" placeholder="password"
                            required="true" requiredMessage="Password is required!"/>

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default LoginForm;