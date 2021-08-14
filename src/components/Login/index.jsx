import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <Helmet>
                <title>MiniTwitter - Login</title>
                <meta name="description" content="Log in to your MiniTwitter account" />
            </Helmet>

            <h1>Log In to MiniTwitter</h1>
            <form action="#" >
                <label htmlFor="userField">User:</label>
                <input id="userField" type="text" />

                <label htmlFor="passwordField">Password:</label>
                <input id="passwordField" type="password" />

                <Link to="/home"><input type="submit" value="Sign In" /></Link>
            </form>
            <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
            <Link to="/passwordrecovery">Forgot yor password? </Link>
        </div>
    );
}

export default Login;