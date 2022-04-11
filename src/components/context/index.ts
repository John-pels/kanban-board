import { createContext } from 'react';

const Store = createContext({
    lists: [],
    setLists: () => {},
});

export { Store };
