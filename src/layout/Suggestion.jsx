import React from 'react'
import Container from '../components/Container'
import SuggestionCardCOM from '../components/SuggestionCard'

const Suggestion = () => {
  return (
    <section className='pb-[100px]'>
        <Container>
            <div>

              <SuggestionCardCOM news='News' postBy='Tomas Nikelson' time='5 Hours Ago' heading='Punto Pago Allows Quick And Secure 
Payments For Services In Panama'/>
            </div>
            
        </Container>
    </section>
  )
}

export default Suggestion
