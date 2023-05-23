import { createContext, useState, useEffect } from "react"
import axios from "axios"

type GameInitial = {}

interface stateType {
    id: number;
    title: string;
    playtime: string;
    purchased: string;
    icon: string;
    background: string;
}

type propsType = {
    children: any[]
}

export const GameContext = createContext<GameInitial|null>(null)

export const GameProvider = (props: propsType) => {
    const [state, setState] = useState<stateType[]>([]);

    useEffect(() => {
        axios.get('https://mocki.io/v1/d2582c95-f283-4933-8b4f-33e429f62ab7').then(res => setState(res.data))
          
    }, [])

    return (
        <GameContext.Provider value={[state, setState]} >
            {props.children}
        </GameContext.Provider>
    )
}