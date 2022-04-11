import { createContext } from 'react';

const Store = createContext({
    lists: [],
    setLists: (list: Array<any>) => {},
});

export { Store };
