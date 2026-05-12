import React from 'react'
import { Container } from '../../Common/Container'
import img2 from '../../assets/Footer/image 1.png'
import img1 from '../../assets/Footer/paymentsupport.png'
export const Footerbottom = () => {
  return (
    <>
    <div className="py-3.75 border-t border-gray-200">
        <Container>
            <div className=" flex px-5 xl:px-0 lg:justify-between justify-center items-center">
                <h3 className=' text-[#757575]  font-poppins text-[16px] font-normal'>Projectnirvoya -   © 2021 All Rights Reserved</h3>

                <div className="lg:flex items-center hidden ">
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </div>
            </div>
        </Container>
    </div>
    </>
  )
}
