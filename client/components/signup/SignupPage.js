import React from 'react';
import SignupForm from './SignupForm'
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import PropTypes from 'prop-types';

class SignupPage extends React.Component {
    render() {
        const {userSignupRequest} = this.props;
        return(
            <div className="row justify-content-md-center">
                <div className="col-md-6">
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        );
    }
}

SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, {userSignupRequest})(SignupPage);