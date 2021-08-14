import { Helmet } from 'react-helmet';

const PasswordRecovery = () => {
    return (
        <div>
            <Helmet>
                <title>MiniTwitter - Password Recovery</title>
                <meta name="description" content="Restore your password account" />
            </Helmet>

            <h1>Find your Twitter account</h1>
            <p>Enter your email, phone number, or username.</p>
            <input type="email" />
            <button>Search</button>
        </div>
    );

};

export default PasswordRecovery;