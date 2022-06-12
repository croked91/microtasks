import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from './Select';

export default {
    title: 'Select',
  }


let items = [
    {title: 'grisha', value: 1},
    {title: 'petya', value: 2},
    {title: 'misha', value: 3}
]

export const SelectStory = () => <Select value='1' onChange={()=>{}} items={items}/>
