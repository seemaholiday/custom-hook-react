import { useState } from "react";

const useCounterHook=(counter)=>{
    const [count, setCounter] = useState(counter)

    const incCounter=()=>{
        setCounter(count+1)
    }
    const decCounter=()=>{
        setCounter(count-1)
    }

    return [count, incCounter, decCounter]
}
export default useCounterHook

