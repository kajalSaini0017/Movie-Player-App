import { Form } from 'react-router'
import "./SignIn.css";

export const signData = async ({ request }) => {
    try {
        const res = await request.formData();
        const data = Object.fromEntries(res);
        return null;
    }
    catch (error) {
        console.log(error)
    }
}

const SignIn = () => {
    return (
        <div className="signin-container">
            <h2 className="sign-Movie-Player">Movie Player</h2>
            <div className="signin-card">

                {/* Left Section */}
                <div className="signin-left">
                    <img
                        src="signinimg.jpg"
                        alt="signin"
                    />
                </div>

                {/* Right Section */}
                <div className="signin-right">
                    <h2>Sign In</h2>

                    <Form method="Post" action="/signin">
                        <div className="input-group">
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" name='name' />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" name='password'/>
                        </div>

                        <div className="remember">
                            <input type="checkbox" />
                            <span>Remember Me</span>
                        </div>

                        <button type="submit" className="sign-btn">Sign In</button>

                        <p className="signup">
                            Don’t have an account? <span>Sign Up</span>
                        </p>
                    </Form>
                </div>

            </div>
        </div>
    );
};

export default SignIn;
