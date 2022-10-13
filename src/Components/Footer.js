import React from 'react'
import { ReactComponent as Twitter } from '../images/twitter.svg'
import { ReactComponent as Telegram } from '../images/telegram.svg'
import { ReactComponent as Tiktok } from '../images/tiktok.svg'
import { ReactComponent as Pintrest } from '../images/pintrest.svg'

function Footer() {
  return <>
    <div className="nav justify-content-between px-3">
      <div className="lbox">
        <Twitter className='ficon'></Twitter>
        <Telegram className='ficon'></Telegram>
        <Tiktok className='ficon'></Tiktok>
        <Pintrest className='ficon'></Pintrest>
      </div>
      <div className="lbox">
        <ul className='d-flex fonts'>
          <li className='mx-3'>Terms</li>
          <li className='mx-3'>CA Supply Chain</li>
          <li className='mx-3'>Privacy</li>
          <li className='mx-3'>CA Privacy Rights</li>
          <li className='mx-3'>Internet-Based Ads</li>
          <li className='mx-3'>Copyright &copy; 2022</li>
         </ul>
      </div>
       
     </div>
  </>
}

export default Footer
