import axios from "axios"
import { createContext,  useEffect, useState } from "react";

type SupportInitial = {}

type stateType = {
    id: number;
    title: string;
    playtime: string;
    purchased: string;
    icon: string;
    background: string;
}

interface propsType  {
    children: any[]
}

export const SupportContext = createContext<SupportInitial|null>(null);

export const SupportProvider = (props: propsType) => {
    const [state, setState] = useState<stateType[]>([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/1ef72dc3-cad0-46b6-ab28-4e8a1d154fe0').then(res => setState(res.data))
          
    }, [])

    return (
        <SupportContext.Provider value={[state, setState]} >
            {props.children}
        </SupportContext.Provider>
    )
}