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
      <GetProductsfromfile/>
      

    </>
  )
}

export default App
