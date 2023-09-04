import React from 'react'
import Section from '../Section'
import Container from '../Container'
import OverlyImg from '../../assets/OverlyImg.png'
import {CiPlay1} from 'react-icons/ci'
import SubHeading from '../SubHeading'
import CommonRaleWay from '../CommonRaleWay'
function Play() {
  return (
  <Section>
    <Container>
      <div className='relative'>
   <img src={OverlyImg} alt={OverlyImg} />
   <div className='absolute  top-[35%] left-[27%] text-center'>
    <div   >
    <CiPlay1 className='p-4 mx-auto rounded-full bg-[#F95C19] text-white text-6xl	'/>
    </div>
    <SubHeading text="FASTEST DELIVERY" />
    <CommonRaleWay text=" You can get your valuable item in the fastest period of
 time with safety. Because your emergency
 is our first priority." className="font-normal text-white text-2xl w-[553px]"/>
   </div>
      </div>
    </Container>
  </Section>
  )
}

export default Play