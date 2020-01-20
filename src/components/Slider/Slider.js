import React, { useState, useRef } from 'react'
import { ArrowLeftS } from 'styled-icons/remix-line/ArrowLeftS'
import { ArrowRightS } from 'styled-icons/remix-line/ArrowRightS'
import styled from 'styled-components'

const SliderWrapper = styled.div`
    transform: translateX(${props => props.translate}px);
    transition: transform ease-out 0.45s;
    display: flex;
`

const LeftArrow = styled(ArrowLeftS)`
  color: black;
  width: 30px;
`

const RightArrow = styled(ArrowRightS)`
  color: black;
  width: 30px;
`

const Slider = ({children}) => {
  const [{currentIndex, translateValue}, setState] = useState({currentIndex: 0, translateValue: 0})
  const sliderRef = useRef()

  const goToSlide = action => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if( (action === 'NEXT' && currentIndex === children.length - 1) || 
        (action === 'PREVIOUS' && currentIndex === 0)) {
      return false 
    }
    
    // This will not run if we met the if condition above
    setState({
      currentIndex: currentIndex + (action === 'NEXT' ?  1 : - 1),
      translateValue: translateValue + (action === 'NEXT' ? -sliderRef.current.offsetWidth : sliderRef.current.offsetWidth)
    })
  }

  return (
    <div>
      <SliderWrapper ref={sliderRef} translate={translateValue}>
        {children}
      </SliderWrapper>
      <div onClick={() => goToSlide('PREVIOUS')}>
        <LeftArrow  />
      </div>
      <div onClick={() => goToSlide('NEXT')}>
        <RightArrow />
      </div>
    </div>
  )
}

export default Slider