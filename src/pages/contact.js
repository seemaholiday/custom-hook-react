import { useEffect } from "react"
import useCustomHookApi from '../component/cunstomHookApi'

const Contact=()=>{
    const [apiCallEvent, data] = useCustomHookApi('https://jsonplaceholder.typicode.com/users');
   
    return(
        <div>
            {
                console.log("data", data)
            }
            <button onClick={apiCallEvent}>
                Call Me Contact
                
            </button>
        </div>
    )

}
export default Contact
