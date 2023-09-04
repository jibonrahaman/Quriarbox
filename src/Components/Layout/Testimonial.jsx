import React from 'react'
import Section from '../Section'
import Container from '../Container'
import SubHeading from '../SubHeading'
import MainSubHeading from '../MainSubHeading'
import sixsix from '../../assets/66.png'
import Flex from '../Flex'
import CommonRaleWay from '../CommonRaleWay'
import {AiTwotoneStar} from 'react-icons/ai'
import Avatar from '../../assets/Avatar.png'
function Testimonial() {
  return (
    <Section>
      <Container>
     <Flex className=" justify-center gap-10 ">
     <div >
<img src={sixsix} alt={sixsix} />
        </div>
    <div className='text-center'>
    <SubHeading text="TESTIMONIAL"/>
        <MainSubHeading text="Our Awesome
 Clients"/>
    </div>
     </Flex>
 
      <div className='w-[796px] rounded-3xl bg-white p-8 mx-auto mt-12  '>
        <CommonRaleWay text="Fantastic service!" className="font-bold text-2xl text-[#F95C19]"/>
        <CommonRaleWay text="I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable."/>


    
        <Flex className="justify-between pt-6 ">
        <Flex className='text-[#F95C19] text-xl mt-4  '>
         <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiTwotoneStar/>
          <AiTwotoneStar/>
         </Flex>
         <Flex className="gap-4">
         <div>
         <CommonRaleWay text="Yves Tanguy" className="font-bold"/>
         <CommonRaleWay text="Chief Executive, DLF" className="font-normal"/>
         </div>
         <img src={Avatar} alt={Avatar} />
         </Flex>
        </Flex>
     
           

       
      </div>

      </Container>
    </Section>
  )
}

export default Testimonial