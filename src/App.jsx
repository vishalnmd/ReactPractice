import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardList from './component/CardList'
import Counter from './component/Counter'
import Temp from './component/temp'
import EventTest from './component/EventTest'
import UseEffectImpl from './component/UseEffectImpl'
import Clock from './component/Clock'
import Parent from './componet_useContext/parent'
import Navbar from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import Form from './component/Form'
import ReduxCounter from './component/ReduxCounter'
import Stopwatch from './component/Stopwatch'
import Memo from './component/Memo'
import UseCallback from './component/UseCallback'
import AxiosImpl from './component/AxiosImpl'

function App() {

  return (
    <>
    
      
      <Navbar/>
      <div className='flex flex-col justify-center items-center min-h-screen w-screen gap-5 bg-gray-700' >
        
        <Routes>
          <Route path='/' element={<CardList/>}></Route>
          <Route path='/clock' element={<Clock></Clock>}></Route>
          <Route path='/others' element={
            <>
                <UseEffectImpl></UseEffectImpl>
                <Temp></Temp>
                <EventTest></EventTest>                
                <Parent></Parent>        
                <Memo></Memo>      
            </>
          }/>
          <Route path='/form' element={<Form/>}/>
          <Route path='/redux' element={<ReduxCounter/>}/>
          <Route path='/stopwatch' element={<Stopwatch/>}/>
          <Route path='/callback' element={<UseCallback/>}/>
          <Route path='/axios' element={<AxiosImpl/>}/>
          <Route path='*' element={<CardList/>}/>
        </Routes>
        
      </div>      
    </>
  )
}

export default App
