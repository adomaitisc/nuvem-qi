import { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

firebase.initializeApp({});

const AuthContext = createContext<any>(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  const login = (email: string, password: string) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          setUser(result.user);
          return true;
        }
      });
  };

  const register = (name: string, email: string, password: string) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        if (result.user) {
          result.user.updateProfile({
            displayName: name,
          });
          setUser(result.user);
          return true;
        }
      });
  };

  const logout = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    // Cleanup function on unmount
    return () => unsubscribe();
  }, []);

  const values: any = {
    user,
    isAuthenticating,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
