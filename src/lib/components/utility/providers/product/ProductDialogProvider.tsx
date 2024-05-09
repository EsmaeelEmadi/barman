'use client'

import { useState, createContext, useContext as useReactContext } from 'react';

// TYPES
import type { PropsWithChildren, Dispatch, SetStateAction } from 'react';
import { IProduct } from '@/types/product';

type ContextType = {
    product: IProduct | undefined;
    setProduct: Dispatch<SetStateAction<IProduct | undefined>>;
};

const Context = createContext<ContextType>({
    product: undefined,
    setProduct: () => undefined,
});

export const ProductDialogProvider = ({ children }: PropsWithChildren) => {
    const [product, setProduct] = useState<IProduct | undefined>();

    return (
        <Context.Provider value={{ product, setProduct }}>
            {children}
        </Context.Provider>
    );
}

export const useProductDialogContext = () => {
    return useReactContext<ContextType>(Context);
}
