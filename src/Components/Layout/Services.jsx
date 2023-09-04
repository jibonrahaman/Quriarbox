import React from 'react'
import Section from '../Section'
import Container from '../Container'
import SubHeading from '../SubHeading'
import MainSubHeading from '../MainSubHeading'
import CommonRaleWay from '../CommonRaleWay'
import {BiSolidCircle} from 'react-icons/bi'
import Flex from '../Flex'
import ServiceButton from '../ServiceButton'

function Services() {
  return (
    <Section>
      <SubHeading text="Services" className="text-center"/>
      <MainSubHeading text="Our services for you" className="text-center"/>
      <Container>
      <Flex className="justify-between mt-14">
      <div className='py-10 rounded-md px-16 bg-white w-[400px]' >
        <div className='mx-auto flex flex-col gap-y-8  '>
          <div className='mx-auto '>
          <svg width="71" height="86" viewBox="0 0 71 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M0.492676 33.5C0.492676 14.9985 15.4911 0 33.9927 0H36.9631C55.4647 0 70.4631 14.9985 70.4631 33.5C70.4631 52.0015 55.4647 67 36.9631 67H33.9927C15.4911 67 0.492676 52.0015 0.492676 33.5Z" fill="#FFAF0F"/>
<path d="M57.5 47.8889H46.5V42.4444L41 37H30L24.5 42.4444V47.8889H13.5C10.475 47.8889 8 50.3389 8 53.3333V66.9444C8 68.9861 9.1 70.7011 10.75 71.6539V80.5556C10.75 83.5772 13.1975 86 16.25 86H54.75C57.8025 86 60.25 83.5772 60.25 80.5556V71.6267C61.8725 70.6739 63 68.9317 63 66.9444V53.3333C63 50.3389 60.525 47.8889 57.5 47.8889ZM30 42.4444H41V47.8889H30V42.4444ZM13.5 53.3333H57.5V66.9444H43.75V58.7778H27.25V66.9444H13.5V53.3333ZM38.25 69.6667H32.75V64.2222H38.25V69.6667ZM54.75 80.5556H16.25V72.3889H27.25V75.1111H43.75V72.3889H54.75V80.5556Z" fill="#F95C19"/>
</svg>
          </div>
        <MainSubHeading text="Business Services" className="text-[25px] text-center text-[#464558]"/>

<CommonRaleWay text="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries." className="font-normal text-[#7B7A8B] w-[300px]" />

              <div className='flex gap-y-2 flex-col'>
              <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Corporate goods" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Shipment" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Accesories" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
              </div>

<ServiceButton text="Learn More" className=" "/>
        </div>
        </div>

          {/* ==============1st card============= */}

        <div className='py-10 px-16  rounded-md bg-white w-[400px]' >
        <div className='mx-auto flex flex-col gap-y-8  '>
          <div className='mx-auto '>
          <svg width="71" height="86" viewBox="0 0 71 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M0.492676 33.5C0.492676 14.9985 15.4911 0 33.9927 0H36.9631C55.4647 0 70.4631 14.9985 70.4631 33.5C70.4631 52.0015 55.4647 67 36.9631 67H33.9927C15.4911 67 0.492676 52.0015 0.492676 33.5Z" fill="#FFAF0F"/>
<path d="M57.5 47.8889H46.5V42.4444L41 37H30L24.5 42.4444V47.8889H13.5C10.475 47.8889 8 50.3389 8 53.3333V66.9444C8 68.9861 9.1 70.7011 10.75 71.6539V80.5556C10.75 83.5772 13.1975 86 16.25 86H54.75C57.8025 86 60.25 83.5772 60.25 80.5556V71.6267C61.8725 70.6739 63 68.9317 63 66.9444V53.3333C63 50.3389 60.525 47.8889 57.5 47.8889ZM30 42.4444H41V47.8889H30V42.4444ZM13.5 53.3333H57.5V66.9444H43.75V58.7778H27.25V66.9444H13.5V53.3333ZM38.25 69.6667H32.75V64.2222H38.25V69.6667ZM54.75 80.5556H16.25V72.3889H27.25V75.1111H43.75V72.3889H54.75V80.5556Z" fill="#F95C19"/>
</svg>
          </div>
        <MainSubHeading text="Business Services" className="text-[25px] text-center text-[#464558]"/>

<CommonRaleWay text="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries." className="font-normal text-[#7B7A8B] w-[300px]" />

              <div className='flex gap-y-2 flex-col'>
              <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Corporate goods" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Shipment" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Accesories" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
              </div>

<ServiceButton text="Learn More" className=" "/>
        </div>
        </div>
    {/* ===================2nd card=============================== */}
        <div className='py-10 px-16  rounded-md bg-white w-[400px]' >
        <div className='mx-auto flex flex-col gap-y-8  '>
          <div className='mx-auto '>
          <svg width="71" height="86" viewBox="0 0 71 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.6" d="M0.492676 33.5C0.492676 14.9985 15.4911 0 33.9927 0H36.9631C55.4647 0 70.4631 14.9985 70.4631 33.5C70.4631 52.0015 55.4647 67 36.9631 67H33.9927C15.4911 67 0.492676 52.0015 0.492676 33.5Z" fill="#FFAF0F"/>
<path d="M57.5 47.8889H46.5V42.4444L41 37H30L24.5 42.4444V47.8889H13.5C10.475 47.8889 8 50.3389 8 53.3333V66.9444C8 68.9861 9.1 70.7011 10.75 71.6539V80.5556C10.75 83.5772 13.1975 86 16.25 86H54.75C57.8025 86 60.25 83.5772 60.25 80.5556V71.6267C61.8725 70.6739 63 68.9317 63 66.9444V53.3333C63 50.3389 60.525 47.8889 57.5 47.8889ZM30 42.4444H41V47.8889H30V42.4444ZM13.5 53.3333H57.5V66.9444H43.75V58.7778H27.25V66.9444H13.5V53.3333ZM38.25 69.6667H32.75V64.2222H38.25V69.6667ZM54.75 80.5556H16.25V72.3889H27.25V75.1111H43.75V72.3889H54.75V80.5556Z" fill="#F95C19"/>
</svg>
          </div>
        <MainSubHeading text="Business Services" className="text-[25px] text-center text-[#464558]"/>

<CommonRaleWay text="We give you complete reliable delivery for your company.  We will take full responsibility of the deliveries." className="font-normal text-[#7B7A8B] w-[300px]" />

              <div className='flex gap-y-2 flex-col'>
              <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Corporate goods" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Shipment" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
                <div>
                <Flex className="items-center text-center gap-x-3">
                <BiSolidCircle className='fill-[#F95C19]'/>
                <CommonRaleWay text="Accesories" className="font-medium text-[#7B7A8B]" />
                </Flex>
                </div>
              </div>

<ServiceButton text="Learn More" className=" "/>
        </div>
        </div>
            {/* ===================2nd card===============================*/}
      </Flex>
      </Container>
    </Section>
  )
}

export default Services