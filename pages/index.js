import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CreateForm from '../components/CreateForm'
import ReportTable from '../components/ReportTable'

export default function Home() {
  const [stores, setStores] = useState([]);
  
  function inputHandler(data) {

   setStores([...stores,data]);
   
  }

 
  
  return (
    <div>
      <Header/>
      <main className="flex flex-col items-center bg-purple-200">

        <CreateForm inputHandler={inputHandler}/>
        <ReportTable stores = {stores}/>    
          
      </main>
      <Footer copyright='2022' length = {stores.length}/>
    </div>
  )
}

