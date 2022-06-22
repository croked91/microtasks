import React, { useState } from 'react';
import { Accordeon } from './components/Accordeon/Accordeon';
import { SelectCustom } from './components/Select/SelectCustom';
import { Select } from './stories/Select';


export type AccordeonTitleType = {
  title:string;
}

export type ActionType = {
  type: string,

}

let accordeonState = [
    {title: 'Egor'},
    {title: 'Kolya'},
    {title: 'Dima'},
    {title: 'Miron'},
]


let state = {
  collapsed: true,
}

function App() {

  const [collapsed, setCollapsed] = useState(true)

  return (
    <div className={'App'}> 
      <SelectCustom callback={()=>{}}/>
      <Accordeon state={state} callback={setCollapsed} accordeonState={accordeonState} collapsed={collapsed}/>
    </div>
  )
}

export default App;
