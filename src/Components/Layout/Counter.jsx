import React from 'react'
import Section from '../Section'
import Container from '../Container'
import Trophy from '../../assets/Trophy.png'
import Map from '../../assets/Map.png'
import Man from '../../assets/Man.png'
import Truck from '../../assets/Truck.png'
import Bag from '../../assets/Bag.png'
import Count from '../Count'
import CommonRaleWay from '../CommonRaleWay'
import Flex from '../Flex'
function Counter() {
  return (

    <Section>
      <Container>
      <Flex className="justify-between text-center items-center">
                <div>
                <img src={Trophy} alt={Trophy} className='mx-auto' />
                <Count text="26+"  className="my-4"  />
                <CommonRaleWay text="Awards  won" className="font-bold text-xl "/>
              </div> 
              <div>
              <img src={Map} alt={Map} className='mx-auto' />
              <Count text="65+"  className="my-4"  />
              <CommonRaleWay text="States covered" className="font-bold text-xl "/>
            </div> 
              <div>
                <img src={Man} alt={Man} className='mx-auto' />
                <Count text="689K+"  className="my-4"  />
                <CommonRaleWay text="Happy clients" className="font-bold text-xl "/>
              </div>

              <div>
                <img src={Truck} alt={Truck} className='mx-auto' />
                <Count text="130M+"  className="my-4"  />
                <CommonRaleWay text="Goods delivered" className="font-bold text-xl "/>
              </div> 
               <div>
                <img src={Bag} alt={Bag} className='mx-auto' />
                <Count text="130M+" className="my-4" />
                <CommonRaleWay text="Business hours" className="font-bold text-xl "/>
              </div>
      </Flex>
      </Container>
    </Section>
  )
}

export default Counter