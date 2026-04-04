import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import First from './Component/First'
import ArrowComp from './Component/ArrowComp'
import Nav, {  Header as MyHeader } from './Component/Twocomp'
import JSXRules from './JSXRules'
import ParentRerender from './Re-render/ParentRerender'
import ConditionalRendering from './ConditionalRendering'
import Events from './Events'
import StateExample from './StateExample'
import ParentCompprops from './Props/Simpleprops/ParentCompprops'
import ParentPropsfunction from './Props/pass function/ParentPropsfunction'
import ParentCompStateProps from './Props/State as props/ParentCompStateProps'
import ParentCompch from './Props/children props/ParentCompch'
import SimpleListObjectMap from './List/SimpleListObjectMap'
import SortList from './List/SortList'
import StateList from './List/StateList'
import GetProductsfromfile from './one js file for data/GetProductsfromfile'
import Form from './Form/Form'
import DropDown from './Form/DropDown'
import Radio from './Form/Radio'
import CheckBox from './Form/CheckBox'
import InlineCss from './CSS/InlineCss'
import CssasaObject from './CSS/CssasaObject'
import Normal from './CSS/NormalCss/Normal'
import Conflicts2 from './CSS/Conflicts/Conflicts2'
import Conflicts1 from './CSS/Conflicts/Conflicts1'
import Modulecss from './CSS/Conflicts/Cssmodules/Modulecss'
import Dynamiccss from './CSS/Dynamiccss'
import Task from './CSS/Task/Task'
import TailwindCss from './CSS/TailwindCss'

// import Twocomp, { Footer,Header } from './Component/Twocomp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>App comp</h1> */}
      {/* component  */}
      {/* <First/>
      <ArrowComp/> */}
      {/* <Twocomp/> */}
      {/* <Header/> */}
        {/* <Footer/> */}
      {/* <Nav/>
      <MyHeader/> */}

      {/* JSX rule  */}
      {/* <JSXRules/> */}

      {/* <ParentRerender/> */}
      {/* <ConditionalRendering/> */}

      {/* <Events/> */}
      {/* <StateExample/> */}

      {/* <ParentCompprops/> */}
      {/* <ParentPropsfunction/> */}
      {/* <ParentCompStateProps/> */}
      {/* <ParentCompch/> */}

      {/* list  */}
      {/* <SimpleListObjectMap/> */}

      {/* <SortList/> */}

      {/* <StateList/> */}
      {/* <GetProductsfromfile/> */}
      
        {/* Form handling  */}
        {/* <Form/> */}
        {/* <DropDown/> */}
        {/* <Radio/> */}

        {/* <CheckBox/> */}

        {/* css  */}
        {/* <InlineCss/> */}

        {/* <CssasaObject/> */}
        {/* <Normal/> */}
        
        {/* <Conflicts2/>
        <Conflicts1/> */}

        {/* <Modulecss/> */}
          {/* <Dynamiccss/> */}
          {/* <Task/> */}
          <TailwindCss/>

    </>
  )
}

export default App
