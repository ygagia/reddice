import React from 'react';
import SignupForm from './SignupForm'

class SignupPage extends React.Component {
    render() {
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <SignupForm />
                </div>
            </div>
        );
    }
}

export default SignupPage;