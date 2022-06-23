import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';




export default {
    title: 'React Memo',
  }

  const Counter =(props:{count: number}) =>{
    return <div>{props.count}</div>
  }

  const UsersSecret =(props:{users:Array<string>}) =>{
    console.log("Users");
    return <div>{props.users.map((u,i)=><div key={i}>{u}</div>)}</div>
  }
  
  const Users = React.memo(UsersSecret)



  export const Example = () =>{
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Egor", "Misha", "Grisha"])

    const addUsers = () => {
      const newUsers = [...users, "Sveta" + new Date().getDate()]
      setUsers(newUsers)
    }

    return <>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={addUsers}>AddUSers</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
  }