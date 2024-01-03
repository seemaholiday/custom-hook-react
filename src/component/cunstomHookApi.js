import { useState } from "react"

const useCustomHookApi =(url)=>{
    const [data, setData] = useState([]);
    const apiCallEvent=()=>{
        fetch(url)
        .then(response => response.json())
        .then(json => setData(json))
    }

    return [apiCallEvent, data]
}
export default useCustomHookApi