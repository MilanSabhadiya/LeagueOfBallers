import React from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId: "804834129896-k0b2q56gl8sija341k1f8omcfna4ip3s.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                // Listen for sign-in state changes.
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        debugger;
        if (isSignedIn) {
            this.props.SignInUser(this.auth.currentUser.get().getId());
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    render() {
        return (
            <div>
                <div className="buttons">
                    <button id="login" type="button">
                        <img height="30px" src="https://img.icons8.com/fluent/48/000000/google-logo.png" alt="Google_Logo" />
                        <span style={{ color: 'white' }} onClick={this.onSignInClick}>Sign up with Google</span>
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSigned: state.auth.IsSignedIn
    }
}

export default connect(mapStateToProps, {
    SignInUser: SignIn
})(GoogleAuth);