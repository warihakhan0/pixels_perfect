import React from 'react'
interface button{
button:string
}
const Button = ({
  button
}:button) => {
  return (
    <div>
        <button type="submit" className='bg-black text-white p-[10px] rounded-sm font-medium text-sm'>{button}</button>
        </div>
  )
}

export default Button