import React from 'react'
import {User} from './components/User'
import { User1 } from './components/User'
import About from './components/About'
import Parent from './components/Parent'
import Child1 from './components/Child1'
import Click from './components/Click'
import Form from './components/Form'
import InputSubmit from './components/InputSubmit'
const mockdata = {
  name: 'Sashwath',
  sash:'Roshini',
  mob: '1235456'
};
const App = () => {
  return (
    <div>
      <User/>
      <User1/>
      <Parent></Parent>
      <Child1 {...mockdata} />
      <Click></Click>
      <About></About>
      <Form></Form>
      <InputSubmit></InputSubmit>
    </div>
  )
}

export default App
