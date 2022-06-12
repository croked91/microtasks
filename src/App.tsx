import React, { useState } from 'react';
import { Accordeon } from './components/Accordeon';


export type AccordeonTitleType = {
  title:string;
}



let accordeonState = [
    {title: 'Egor'},
    {title: 'Kolya'},
    {title: 'Dima'},
    {title: 'Miron'},
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
