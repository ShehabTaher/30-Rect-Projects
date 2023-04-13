import React from 'react'
import Title from '../components/Title'

const RandomizeColors = () => {
    let body = document.querySelector("body")
    const handleClick = (event) =>{
        // console.log(getRandomColor())
        body.style.background = getRandomColor()
        event.target.style.background= getRandomColor()
    }
    const handleSecClick= (e) =>{
        // console.log(e.target)
        // console.log(getRandomColor())
        let body = document.querySelector("body")
        body.style.background = getRandomColor()
        e.target.style.background= getRandomColor()
    }
    function getRandomColor () {
        let letters = "0123456789ABCDEF"
        let color = "#"
        for(let i=0;i<6;i++){
            color +=letters[Math.floor(Math.random() * 16)]
        }
return color
    }
  return (
    <div className='container m-auto text-center'>
        <Title text={"Randomize Colors"}  classes={"mb-4"}/>
        <button className='btn btn-danger' onClick={(event) =>handleClick(event)}>Click me</button>
        <button className='btn btn-success' onClick={handleSecClick}>Click me</button>
        <button className='btn btn-primary' onClick={handleSecClick}>Click me</button>
        <button className='btn btn-warning' onClick={handleSecClick}>Click me</button>
    </div>
  )
}

export default RandomizeColors