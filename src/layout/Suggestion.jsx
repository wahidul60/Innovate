import React from 'react'
import Container from '../components/Container'
import SuggestionCardCOM from '../components/SuggestionCard'
import Flex from '../components/Flex'

const Suggestion = () => {
  return (
    <section className='pb-[40px] relative'>
      <div className='absolute bg-BgElement3 bg-no-repeat bg-left-bottom w-full h-full -z-10'> </div> 
        <Container>    
          <Flex>
            <div className='w-[982px]'>
              <h1 className='font-Sans font-bold text-[50px] pb-[64px]'>You May Also Like </h1>
              <SuggestionCardCOM news='News' postBy='Tomas Nikelson' time='5 Hours Ago' heading='Punto Pago Allows Quick And Secure Payments For Services In Panama'/>
              <SuggestionCardCOM news='News' postBy='Tomas Nikelson' time='5 Hours Ago' heading='The User Can Also Replenish A Balance Make Remittances '/>
              <SuggestionCardCOM news='News' postBy='Tomas Nikelson' time='5 Hours Ago' heading='The User Can Also Replenish A Balance Make Remittances '/>

            </div>  
          </Flex>                      
        </Container>
    </section>
  )
}

export default Suggestion
