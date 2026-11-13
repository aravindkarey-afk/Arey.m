import { createContext, useContext } from 'react';

export const PageContext = createContext('/');
export const usePathname = () => useContext(PageContext);
export const normalizePath = (path: string) => path.endsWith('/') ? path : `${path}/`;
