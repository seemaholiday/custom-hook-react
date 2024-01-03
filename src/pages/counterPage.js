import useCounterHook from '../component/counterCustomHook'
const Counterpage=()=>{
    const [count, incCounter, decCounter] = useCounterHook(0)
    return(
        <>
            <h1>{count}</h1>
            <button onClick={incCounter}>Increment</button>
            <button onClick={decCounter}>Decreament</button>
        </>
    )
}
export default Counterpage;