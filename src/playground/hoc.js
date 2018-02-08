// HIGHER ORDER COMPONENT (HOC) IS A COMPONENT WHICH TAKES A COMPONENT AS AN ARGUMENT AND RETURNS A NEW COMPONENT.
// REUSE CODE
// RENDER HIJACKING
// PROP MANIPULATION
// STATE ABSTRACTION

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <p>This is some info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>{props.info + 'in'}</p> : <p>{props.info + 'out'}</p>}
            <WrappedComponent {...props}/>
        </div>
    )
    
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <p>{props.info + ' in'}</p> : <p>{props.info + ' out'}</p>}
            <WrappedComponent {...props}/>
        </div>
    )
    
}

// const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated = {false} info = 'You are logged'/>, document.getElementById('app'))