import {useState,useEffect,useCallback,MouseEvent,KeyboardEvent,useMemo,useRef} from 'react'

interface User{
  id:number,
  username:string
}
type fibFunc=(n:number)=>number

const fib:fibFunc=(n:number)=>{
  if(n<2) return n
  return fib(n-1)+fib(n-2)
}

const myBigNumber=35


const App = () => {

  // const inputRef=useRef<HTMLInputElement>(null!);
  // useState<number>(0) useState<number | null>(null) useState<User | null>(null) useState<User[]>([]) useState<User>({} as User)
    const [count,setCount]=
    useState<number>(0)
    const [users,setUsers]=useState<User[] | null>(null)
    
    const inputRef=useRef<HTMLInputElement>(null);

    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)
    // In React 18+ there is mounting,unmounting, and then remounting
    useEffect(()=>{
    console.log('Mounting')
    console.log('Users:',users)
    return ()=>console.log('Unmounting')
    },[users])

    // useCallback is used to memoize large functions
    // const addTwo=useCallback((e:MouseEvent<HTMLButtonElement> |
    //   KeyboardEvent<HTMLButtonElement>):void =>setCount(prev=>prev+2),[])

    const addTwo=useCallback(():void=>setCount(prev=>prev+2),[])


    // to memoize a value we could useMemoize, we can use it to store expensive calculation results
    const result=useMemo<number>(()=>fib(myBigNumber),[myBigNumber])
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input ref={inputRef} type="text"/>
    </div>
  )
}

export default App