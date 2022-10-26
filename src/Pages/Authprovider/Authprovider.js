import React, { createContext } from 'react';


export const Authcontext = createContext();

const Authprovider = ({ children }) => {
    const user = { name: 'disa' };

    const authInfo = { user };
    return (
        <div>
            <Authcontext.Provider value={authInfo}>
                {children}
            </Authcontext.Provider>
        </div>
    );
};

export default Authprovider;