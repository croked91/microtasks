import React, { useState } from 'react';
import { Accordeon } from './components/Accordeon';


export type AccordeonTitleType = {
  title:string;
}



let accordeonState = [
    {title: 'Title1'},
    {title: 'Title2'},
    {title: 'Title3'},
    {title: 'Title4'},
]

function App() {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className={'App'}> 
      <Accordeon callback={setCollapsed} accordeonState={accordeonState} collapsed={collapsed}/>
    </div>
  )
}

export default App;
