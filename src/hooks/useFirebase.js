import { useEffect, useState } from "react"
import initializeAuthentication from '../Firebase/firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, sendPasswordResetEmail, createUserWithEmailAndPassword, sendEmailVerification, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useHistory, useLocation } from "react-router";


initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [admin, setAdmin] = useState(false);

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();

    // google sign in
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // logout
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => { })
            .finally(() => {
                setIsLoading(false);
            });
    }
    // signin hold
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false)
        })
    }, []);

    // Login by email and password
    const handleNameChange = (e) => {
        setName(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);

    };

    const handleLogin = () => {
        return signInWithEmailAndPassword(auth, email, password);

    };

    const hanleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((err) => {
                console.log(err.message);
            });
    };

    // registration by email and password
    const registrationSubmit = () => {
        // e.preventDefault();
        if (password.length < 6) {
            setError("Password must be at least 6 character long");
            // setMessage("");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                saveUser(email, name, 'POST');
                updateRegisterInfo();
                verifyEmail();
                // setMessage('Register Done');
                // window.location.reload()
            })
            .catch((error) => {
                setError('fail to register');
            });
    };
    const updateRegisterInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                const newUser = { ...user, displayName: name, email: email };
                setUser(newUser);
            })
            .catch((error) => { });
    };

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
            });
    };

    useEffect(() => {
        setIsAdminLoading(true)
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                setIsAdminLoading(false)
            })
    }, [user.email])

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        isAdminLoading,
        admin,
        saveUser,
        user,
        setUser,
        error,
        setError,
        email,
        password,
        name,
        message,
        setMessage,

        signInUsingGoogle,
        logout,

        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
        hanleResetPassword,

        registrationSubmit,

        isLoading,
        setIsLoading
    }
}

export default useFirebase;