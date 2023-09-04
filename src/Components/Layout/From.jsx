import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Group from '../../assets/Group.png'
import SubHeading from '../SubHeading'
import MainSubHeading from '../MainSubHeading'
import CommonRaleWay from '../CommonRaleWay'
import Button from '../Button'
function From() {
  return (
   <Section>
    <Container>
      <Flex className="mx-auto  gap-10 justify-center ">
     <div  className='w-2/5 '>
<img src={Group} alt={Group} />
<SubHeading text="REQUEST A CALLBACK"/>
<MainSubHeading text="We will contact in the shortest time." className="ml-5"/>
<CommonRaleWay  text="Monday to Friday, 9am-5pm."  className="font-semibold text-[#9291A1] mt-3"/>
     </div>

<from>
<label>
  <Flex className="flex-col gap-y-7 mt-10"> <input type="text" name='name' placeholder='Name' className='border border-bg-[#C5C5D2] bg-transparent py-2 px-9' />

  <input type="email" name='email' placeholder='Email' className='border border-bg-[#C5C5D2] bg-transparent py-2 px-9' />

  <textarea name="" id="" cols="40" rows="7"  className='border border-bg-[#C5C5D2] bg-transparent px-9' placeholder='Message'></textarea>
  <Button text="Send Message" />
  </Flex>
</label>
</from>

      </Flex>
    </Container>
   </Section>
  )
}

export default From