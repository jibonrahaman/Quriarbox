import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'
import bannerImage from '../../assets/bannerImage.png'
import Paragraph from '../Paragraph'
import Button from '../Button'
import {AiOutlineArrowRight} from 'react-icons/ai'
function Banner() {
  return (
<Section >
  <Container>
<Flex className="">
  <div className='w-[36%]'>
    
    <Heading text="A trusted provider of " className="font-normal"/>
    <Heading text="courier services." />
   <Paragraph text="We deliver your products safely to your home in a reasonable time." className="w-[292px] py-8"/>

  <Button text="Get started" className=""/>
 </div>


  <div className='w-3/5'>
  <img src={bannerImage} alt={bannerImage} />
  </div>
</Flex>
  </Container>

  

</Section>

)
}

export default Banner