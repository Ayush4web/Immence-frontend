import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { ReactComponent as Location } from '../images/location.svg'
import { ReactComponent as Menu } from '../images/menu.svg'
import { ReactComponent as Fire } from '../images/Fire icon.svg'
import { ReactComponent as Bag } from '../images/bag icon.svg'
import { ReactComponent as Video } from '../images/video Icon.svg'
import { ReactComponent as Cross } from '../images/cross icon.svg'
import { ReactComponent as Compare } from '../images/compare.svg'
import userImg from '../images/user (1).png'
function Navbar() {
  return (
    <>
      <div className='nav'>
        <h1 className='logo'>LOGO</h1>
        <div className='box'>
          <span className='icons'>
            <Menu className='h' /> Menu
          </span>
          <span className='icons'>
            <Location className='h' /> Location
          </span>

          <div className='search'>
            <FaSearch className='h sicon sl'></FaSearch>
            <input type='text' className='input' />
            <Cross className='h sicon sr'></Cross>
          </div>

          <span className='icons'>
            <Video className='h'></Video>
            Road Shows
          </span>
          <span className='icons'>
            <Fire className='h' />
          </span>
          <span className='icons'>
            <Bag className='h' />
          </span>

          <span className='icons user'>
            <img src={userImg} alt='' />
            <p>Hi, Martha</p>
          </span>
        </div>
      </div>
      <div className='second d-flex'>
        <div className='d-flex justify-content-center align-items-center w-50'>
          <p className='mx-4 text-bold'>Online Price Range</p>
          <span className='price'>$319</span>-
          <span className='price'>$369</span>
        </div>
        <div className='d-flex w-50'>
          <div className='compare'>
            <Compare className='mr-1'></Compare>
            <span>Compare</span>
            <br />
            <span className='small'>with similar products</span>
          </div>
          <button className='btn btn-primary btn-block w-75'>
            Make An Offer
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
