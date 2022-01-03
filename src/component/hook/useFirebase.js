import init from "./../firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
init();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const google = (history, location) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // email and password authentication
  const registerUser = (email, password, name, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user 73----1
        saveUser(email, name, "POST");
        // set name to the firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  //   observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setError("");
        setUser({});
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  // signInWithEmailAndPassword
  const loginUser = (email, password, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError("");
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://mighty-reef-87460.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  // admin....verify
  useEffect(() => {
    if (user.email) {
      setIsLoading(true);
      fetch(`https://mighty-reef-87460.herokuapp.com/users/${user.email}`)
        .then((res) => res.json())
        .then((data) => setAdmin(data.admin))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user.email]);

  return {
    google,
    user,
    registerUser,
    logout,
    loginUser,
    isLoading,
    error,
    admin,
    setIsLoading,
  };
};

export default useFirebase;
