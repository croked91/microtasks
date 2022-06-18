import React, { useState } from 'react';
import { Accordeon } from './components/Accordeon';
import { SelectCustom } from './components/Select/SelectCustom';
import { Select } from './stories/Select';


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
      <SelectCustom />
      <Accordeon callback={setCollapsed} accordeonState={accordeonState} collapsed={collapsed}/>
    </div>
  )
}

export default App;
