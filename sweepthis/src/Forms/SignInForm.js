import React, { Component } from 'react';
import { Form, Text } from 'react-form';

const signInForm = () => {
    return (
        <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
            {formApi => (
                <form onSubmit={ formApi.submitForm } id="signinform">
                    <Text field="email" placeholder="Email" />
                    <button type="submit">Sign In</button>
                </form>
            )}
        </Form>
    );
}
   

// class SignInForm extends Component {
//     render() {
//        return (
//         <Form onSubmit={submittedValues => this.setState({ submittedValues })}>
//             {formApi => (
//                 <form onSubmit={ formApi.submitForm } id="signinform">
//                     <Text field="email" placeholder="Email" />
//                     <button type="submit">Sign In</button>
//                 </form>
//             )}
//         </Form>
//         );
//     }
// }

    

//     return (
//         <form>
//             <Email field="email" placeholder="Email" />
//             <Password field="password" placeholder="Password" />
//             <input type="email" name="email" id="email" />
//             <input type="password" name="password1" id="password1" placeholder="Password"/>
//             <input type="submit" value="Sign In" />
//         </form>
//     )
// };

export default signInForm;
// export default SignInForm;