import React from 'react'


function Navbar() {
  return (
    <div className="font-serif flex justify-between h-20 items-center"
    style={{
      background: "rgb(221,255,232)",
      background: "linear-gradient(90deg, rgba(221,255,232,1) 0%, rgba(240,235,235,1) 51%, rgba(220,243,255,1) 100%)"
    }}
    >
      <div className="pl-10">
        <div className="font-bold text-2xl font-sans">Calm <span className='text-green-500'>Circle</span></div>
      </div>

      <div className="">
        {/* <Link></Link>
        <Link></Link>
        <Link></Link> */}
      </div>

      <div className="pr-10">
        <button className='py-2 px-4 rounded-xl bg-green-500 text-white'>Create Account</button>
      </div>
    </div>
  )
}

export default Navbar
