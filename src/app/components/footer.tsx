import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black flex flex-col md:flex-row md:justify-between p-10 place-items-center'>
        <div>
            <h3 className='text-slate-400 mb-10'>Complete your style with awesome clothes from us.</h3>
        </div>
        <div className='flex flex-row justify-between gap-14'>
<div className='mb-5'>
<h3 className='text-slate-300 font-medium text-sm mb-2'>Company</h3>
            <ul>
            <li className="text-slate-400  list-none mb-2">About</li>
            <li className="text-slate-400 list-none mb-2">Contact us</li>
            <li className="text-slate-400 list-none mb-2">Support</li>
            <li className="text-slate-400 list-none mb-2">Careers</li>
            </ul>
</div>
<div className='mb-5'>
<h3 className='text-slate-300 font-medium text-sm mb-2'>Quick Link</h3>
            <ul>
            <li className="text-slate-400  list-none mb-2">Share Location</li>
            <li className="text-slate-400 list-none mb-2">Orders Tracking</li>
            <li className="text-slate-400 list-none mb-2">SizeGuide</li>
            <li className="text-slate-400 list-none mb-2">FAQs</li>
            </ul>
</div>
<div className='mb-5'>
<h3 className='text-slate-300 font-medium text-sm mb-2'>Legal</h3>
            <ul>
            <li className="text-slate-400  list-none mb-2">Terms & conditions</li>
            <li className="text-slate-400 list-none mb-2">Privacy Policy</li>
            
            </ul>
</div>
        </div>
    </div>
  )
}

export default Footer