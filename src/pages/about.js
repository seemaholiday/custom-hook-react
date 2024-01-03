import { useEffect } from "react"
import useCustomHookApi from '../component/cunstomHookApi'

const About=()=>{
    const [apiCallEvent, data] = useCustomHookApi('https://jsonplaceholder.typicode.com/todos');
   
    return(
        <div>
            {
                console.log("data", data)
            }
            <button onClick={apiCallEvent}>
                Call Me About
                
            </button>
        </div>
    )

}
export default About
