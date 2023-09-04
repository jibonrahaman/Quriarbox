import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Logo from '../../assets/Logo.png'
import Li from '../Li'
import Button from '../Button'
import {FaSearch} from 'react-icons/fa'
function Navbar() {
  return (
 <Section className="bg-[#fffbf2] pt-5 pb-5">
<Container>
<Flex className="justify-between text-center items-center">
<div className='w-1/4'>
    <img src={Logo} alt={Logo} />
</div>
<ul className='w-1/2' >
<Flex className="gap-x-6 justify-end">
<Li text="Home" className=""/>
<Li text="Our services"/>
<Li text="About Us"/>
<Li text="What’s new?"/>
</Flex>

    </ul>
   <div className='w-1/4 '>
   <Flex className=" items-center text-center justify-center gap-x-4">
   <div className='bg-[#FFEDC9] p-3 rounded-sm '>
   <FaSearch className=' fill-[#FFAF0F]'/> 
   </div>
    <Button text="Contact Me"/>
   </Flex>
    </div> 
</Flex>
</Container>
 </Section>
  )
}

export default Navbar