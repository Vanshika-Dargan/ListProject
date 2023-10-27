import Heading from './components/Heading'
import {Section} from './components/Section'
import Counter from './components/Counter'
import { useState } from 'react'
import List from './components/List'
const App = () => {
  const [count,setCount]=useState<number>(1)
  return (
    <>
    <Heading title={"Hello"}/>
    <Section title={"MyTitle"}>This is my Section.</Section>
    <Counter setCount={setCount}>Count is {count}</Counter>
    <List items={['Coffee','Tea','Code']} render={(item:string)=><span className='gold bold'>{item}</span>}/>
    </>
  )
}

export default App