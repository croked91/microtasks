import React, {useState} from 'react';
import { ComponentStory, ComponentMeta, } from '@storybook/react';
import { SelectCustom } from './SelectCustom';
import {action} from '@storybook/addon-actions'
import { title } from 'process';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SelectCustom',
  component: SelectCustom,
}

let items = [
    {title: 'grisha', value: 1},
    {title: 'petya', value: 2},
    {title: 'misha', value: 3}
]

export const SelectStory = () => <SelectCustom callback={action("valueChanged")}/>