import React from 'react'
import { Container } from './Container'
import logo from '../assets/HeaderImg/logo.png'
import { IoIosSearch } from 'react-icons/io'
export const Header = () => {
  return (
    <>
    
    <div className="">
        <Container>
            <div className="">
             <div className="">
                   <img src={logo} alt="Logo" />
             </div>
             <div className="">
                <input type="text" placeholder="I'm looking for..." />
                <button><IoIosSearch /></button>
             </div>

            </div>
        </Container>
    </div>
    </>
  )
}
