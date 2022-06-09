export default function Header(){
  return (
  <header className="px-8 py-6 text-4xl bg-emerald-500 text-black flex justify-between">
    <h1>Cookie Stand Admin</h1>
    <button className='bg-gray-300 w-24 hover:bg-sky-700 text-sm rounded-md ml-auto mr-6'>Overview</button>
  </header>
  );
}