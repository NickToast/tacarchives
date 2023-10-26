import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    //Initial state is null becuase assuming that no one will be logged in
    const [user, setUser] = useState(null);
    //useEffect will go off every time a page renders
    useEffect(() => {
        
        if(!user){
            //Get a user
            axios.get('/profile')
                //dont want to use await in a useEffect
                .then(({data}) => {
                    setUser(data)
                })
        }
    }, [])
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

//Now to use this context for the whole app, we can wrap everything around this user context provider