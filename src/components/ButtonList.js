import React,{useRef} from 'react'
import Button from './Button'

const ButtonList = () => {
  
    const scrollRef = useRef(null)
    const prev = () => {
      requestAnimationFrame(() => {
        if (scrollRef.current) {    
          // Check if there are child elements
          const children = scrollRef.current.children;
          if (children.length > 0) {
            const itemWidth = parseInt(getComputedStyle(children[0]).width, 10);
            const newPosition = scrollRef.current.scrollLeft - itemWidth * 3;
            scrollRef.current.scrollTo({
              left: newPosition,
              behavior: 'smooth',
            });
          }
        }
      });
    };

    const next = () => {
      requestAnimationFrame(() => {
        console.log(scrollRef.current.children)
        if (scrollRef.current) {
          // Check if there are child elements
          const children = scrollRef.current.children;
          if (children.length > 0) {
            const itemWidth = parseInt(getComputedStyle(children[0]).width, 10);
            const newPosition = scrollRef.current.scrollLeft  + itemWidth * 3;
            scrollRef.current.scrollTo({
              left: newPosition,
              behavior: 'smooth',
            });
          }
        }
      });
    };  

  return (
    <div className='z-50 mt-3 w-full flex items-center'>
      <button className=' hover:rounded-full z-40 mr-2 hover:bg-gray-100 h-10 w-10' onClick={prev}>
        <i className="fa-solid fa-angle-left text-sm text-gray-600"></i>
      </button>
      <div ref={scrollRef} className='flex overflow-x-hidden max-w-[88%] '>
        <Button name="All" />
        <Button name="news" />
        <Button name="comedy" />
        <Button name="cooking" />
        <Button name="music" />
        <Button name="T-series" />
        <Button name="Live" />
        <Button name="Mixes" />
        <Button name="shah rukh khan" />
        <Button name="akshay saini" />
        <Button name="gourav" />
        <Button name="java" />
        <Button name="gaming" />
        <Button name="mixes" />
        <Button name="live" />
        <Button name="javascript" />
        <Button name="pop music" />
        <Button name="recently uploaded" />
        <Button name="new to you" />
      </div>
      <button className='fixed hover:rounded-full right-20 z-40 hover:bg-gray-100 h-10 w-10' onClick={next}>
        <i className="fa-solid fa-angle-right text-sm text-gray-600"></i>
      </button>
    </div>
  )
}

export default ButtonList
