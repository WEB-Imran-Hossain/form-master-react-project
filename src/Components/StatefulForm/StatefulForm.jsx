import { useState } from "react";


const StatefulForm = () => {
    // const [name, setName] = useState(null);
    const [name, setName] = useState('Imran Hossain');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');





    // full form handler control
    const handleSubmit = e => {
        e.preventDefault();

        if (password.length > 6) {
            setError('Password must be 6 characters or longer')

        } else {
            setError('');
        }

        console.log(name, email, password);
    }

    // only name field handler control
    const handleNameChange = e => {
        setName(e.target.value)
    }


    // only email field handler control
    const handleEmailChange = e => {

        // console.log(e.target.value);
        setEmail(e.target.value)
    }

    // only password field handler control
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name}
                    onChange={handleNameChange}
                    type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" required />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;