import React from 'react'
import Section from '../Section'
import SubHeading from '../SubHeading'
import MainSubHeading from '../MainSubHeading'
import Flex from '../Flex'
import GoogleMap from '../../assets/GoogleMap.png'
import CommonRaleWay from '../CommonRaleWay'
import Container from '../Container'
import {MdLocationPin} from 'react-icons/md'
import {ImClock} from 'react-icons/im'
import {CgMail} from 'react-icons/cg'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import Button from '../Button'
function Map() {
  return (
<Section >
    <div className='text-center'>
        <SubHeading  text="FIND US"/>
        <MainSubHeading text="Access us easily" />
    </div>
         <Container>
         <Flex className="gap-x-6">
          <div className='w-1/2	'>
            <img src={GoogleMap} alt={GoogleMap} />
            </div>

            <div className='text-center px-12 bg-white items-center	'>
<div className='mt-16 flex flex-col gap-y-6'>

  
<CommonRaleWay text="Contact with us"  className="font-bold text-xl"/>      <Flex className="text-center items-center gap-1">
      <MdLocationPin className=' text-[#FFAF0F] ' size={25}/>  <CommonRaleWay text="2277 Lorem Ave, San Diego, CA 22553"/>
      </Flex> 
       <Flex className="text-center items-center gap-2">
      <ImClock className=' text-[#FFAF0F] ' size={25}/>  <CommonRaleWay text="Monday - Friday: 10 am - 10pm
Sunday: 11 am - 9pm"/>
      </Flex>
   <Flex className="text-center items-center gap-2">
      <CgMail className=' text-[#FFAF0F] ' size={25}/>  <CommonRaleWay text="info@quriarbox.com"/>
      </Flex>
  
  <Flex  className="gap-x-4">
    <BsFacebook className="hover:text-[#F95C19] duration-500" size={25}/>
    <AiOutlineInstagram className="hover:text-[#F95C19] duration-500" size={25}/>
    <AiFillTwitterCircle className="hover:text-[#F95C19] duration-500" size={25}/>
  </Flex>
</div>
            </div>
          </Flex>
          <Button text="Call us to delivery  123-456789" className="ml-[38%] mt-9"/>

       
         </Container>
 
</Section>  )
}

export default Map