import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'


export default function Home() {
  let [state, setState] = useState( {data: []});
  return (
    <div>
      <Header />
      <main className='flex flex-col items-center py-4 space-y-8'>
        <CookieStandForm onSubmit={inputHandler} />
        <Main data={state}/>
        </main>
 

      
      <Footer copywright= '2021' />
    </div>
  );

  function inputHandler(event){
    event.preventDefault();
    let store = {
      Location : event.target.Location.value,
      minCustomers: event.target.MinimumPerHour.value,
      maxCustomers: event.target.MaximumPerHour.value,
      avgCookies: event.target.AverageCookiesPerHour.value,
    }
    setState(store);
    event.target.reset();
  }
}

function Header(){
  return <header className="px-8 py-6 text-4xl bg-emerald-500 text-black">
    <h1>Cookie Stand Admin</h1>
  </header>
}

function Main(props){
  return(
    <main className="flex flex-col items-center py-y pt-6 space-y-8">
      <p className="text-sm text-gray-500">Report Table Coming Soon...</p>
      <DisplayJson data={props.data} />
      </main>
  )
}

function CookieStandForm(props){
  return(
    <form
      className="w-full max-w-screen-lg px-5 p-3 bg-emerald-300 rounded-md my-10" 
      onSubmit={props.onSubmit}>
      <h1 className="flex justify-center py-3 text-2xl">Create Cookie Stand</h1>
      <div className="flex flex-wrap">
        <label className="">Location</label>
        <input 
        className="flex-auto"
        id="Location"
        placeholder='input a city' 
        required 
        />
      </div>

      <div className="flex">
        <div className="text-center">
          <label>Minimum Customers per Hour</label>
          <input
            type = "number"
            className="flex-bottom"
            id="MinimumPerHour"
            placeholder="input an integer"
            required 
            />
        </div>

        <div className="">
          <label>Maximum Customers per Hour</label>
          <input  
            className="flex-bottom leading-tight" 
            id="MaximumPerHour"
            placeholder="type an integer" 
            required 
            />
        </div>

        <div>
          <label>Average Cookies per Sale</label>
          <input 
            className="flex-bottom"
            id="AverageCookiesPerHour"
            type="float"
            placeholder="input a numeric value" 
            required 
            />
        </div>

        <div className="">
          <button className="flex-bottom px-4 py-2 bg-emerald-500 text-black">Create</button>
        </div>
      </div>

    </form>


      

  )
}

function DisplayJson(props) {
  return (
    <div>
      {JSON.stringify(props.data) == '{"data":[]}' ? (
        "Enter Cookie Data"
      ) : (
        <p className="text-sm tracking-widest text-gray-500">
          {JSON.stringify(props.data)}
        </p>
      )}
    </div>
  );
}


function Footer({ copywright }) {
  return (
    <footer className="px-8 py-6 bg-emerald-500 text-black">
      <p>&copy;{copywright}</p>
    </footer>
  )
}

