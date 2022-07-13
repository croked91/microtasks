import React, { useMemo, useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';




export default {
  title: 'React Use Memo',
}




export const DifficultCoutingExample = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResult = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100000000) {
        fake++
        let fakeValue = Math.random()
      }
      tempResult = tempResult * i
    }
    return tempResult
  }, [a])



  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return (
    <>
      <input value={a} onChange={e => setA(Number(e.currentTarget.value))} type="text" />
      <input value={b} onChange={e => setB(Number(e.currentTarget.value))} type="text" />
      <hr />
      <div>
        Result for a: {resultA}
      </div>
      <div>
        Result for b: {resultB}
      </div>
    </>
  )
}


const UsersArray = (props: {users: Array<string>}) => {
    console.log("USERS");
    return (
      <div>
        {props.users.map((u,i)=><div key={i}>{u}</div>)}
      </div>
    )
}

const Users = React.memo(UsersArray)

export const HelpsToReactMemoExample = () => {
  console.log('HelpsToReactMemoExample');
  
  const [users, setUsers] = useState(["Vit", "Masha", "Grisha"])
  const [counter, setCounter] = useState(0)

  const newUsersArray = useMemo(() => users.filter(u => u.toLocaleLowerCase().indexOf("a") > -1), [users]) 

  const addMisha = [...users, "Misha"]
  

  return (
    <div>
      <button onClick={()=>setCounter(counter+1)}>+</button>
      <button onClick={()=>setUsers(addMisha)}>Add Misha</button>
      {counter}
      <Users users={newUsersArray}/>
    </div>
  )
}