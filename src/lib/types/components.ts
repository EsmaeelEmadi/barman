import type { ReactNode } from "react";

export interface IBaseDialog { 
    open: boolean;
    toggle: () => void;
}

export interface IPropsWithForcedChildren { 
    children: ReactNode
}