import React, { useState } from 'react';
import Body from './components/Body';
import { Button } from './components/buttons';
import Filter from './components/Filter';
import Footer from './components/Footer';
import { NewComponent, NewComponent1 } from './components/NewComponent';
import FnUS from './components/UseState';




function App() {

  let [topCars] = useState([
    { manufacturer: 'BMW', model: 'm5cs' },
    { manufacturer: 'Mercedes', model: 'e63s' },
    { manufacturer: 'Audi', model: 'rs6' },
    { manufacturer: 'Audi', model: 'rs6' },
    { manufacturer: 'Audi', model: 'rs6' }
  ])

  const Button1Foo = (subscriber:string, age:number) => {
    console.log(subscriber, age)
  }
 
  const Button2Foo = (subscriber:string, age:number) => {
    console.log(subscriber, age)
  }

  const Button3Foo = () => {
    console.log("I'm stupid button")
  }


  return (
    <div className={'App'}>
      <Body titleForBody="Body" />
      <Footer titleForFooter='Footer' />
      <NewComponent cars={topCars} />
      <NewComponent1 cars={topCars} />
      <Button title={'1'} callBack={()=>Button1Foo("Vas", 23)} />
      <Button title={'2'} callBack={()=>Button2Foo("Pet", 47)} />
      <Button title={'3'} callBack={Button3Foo} />
      <FnUS />
      <Filter/>
    </div>
  )
}

export default App;
