import React from 'react'
import {User} from './User'
import { User1 } from './User'
import About from './About'
import Parent from './Parent'
import Child1 from './Child1'
import Click from './Click'
import Form from './Form'
import InputSubmit from './InputSubmit'
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
