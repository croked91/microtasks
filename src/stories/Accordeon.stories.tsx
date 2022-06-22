import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordeon } from '../components/Accordeon/Accordeon';
import { title } from 'process';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accordeon',
  component: Accordeon,
}


let state = {
    collapsed:true,
}

    

export const HideAccordeon = () => <Accordeon 
    callback={()=>{}} 
    accordeonState={[]}
    collapsed={true}
    state={state}
/>

export const UnHideAccordeon = () => <Accordeon 
    callback={()=>{}} 
    accordeonState={[    
        {title: 'Title1'},
        {title: 'Title2'},
        {title: 'Title3'},
        {title: 'Title4'},]} 
    collapsed={true}
    state={state}
/>



export const WorkAccordeon = () => {
    const [collapsed, setCollapsed] = useState(false)
    
    return (<Accordeon 
    callback={()=>setCollapsed(!collapsed)} 
    accordeonState={[    
        {title: 'Title1'},
        {title: 'Title2'},
        {title: 'Title3'},
        {title: 'Title4'},]} 
    collapsed={collapsed}
    state={state}
/>)}