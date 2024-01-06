import { useState, useContext, createContext, useEffect, ReactNode } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth';

interface AuthUser {
    uid: string;
    email: string;
}

interface AuthContextType {
    currentUser: AuthUser | null;
    signup: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState<AuthUser | null>(null);

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logout = () => {
        return auth.signOut();
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
