import React, {useState} from "react"
import './index.css'

function App() {

  const [weight, setWeight]=useState(0)
  const [height, setHeight]=useState(0)
  const [bmi, setBmi]=useState('')
  const [message, setMessage]=useState('')

  let calc=(e)=>{
    e.preventDefault()

    if(weight === 0 || height === 0){
      alert("Please Enter Your Details")
    }else{
      let bmi=(weight/(height * height)*703)
      setBmi(bmi.toFixed(1))

      if(bmi < 25){
        setMessage("You are Unweight")
      }else if (bmi >= 25 && bmi < 30){
        setMessage("You are Well Balanced")
      }else{
        setMessage("You are Overweight ")
      }
    }
  }

  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }


  let reload=()=>{
    window.location.reload()
  }

  return (
    <div className="app">
      <div className="container">
        <div className="center">
          <h2>BMI Calculator</h2>
          <form onSubmit={calc}>
            <div>
              <label>Weight (lbs)</label>
              <input type="text" value={weight} onChange={(e)=>setWeight(e.target.value)} />
            </div>
            <div>
              <label>Height (in)</label>
              <input type="text" value={height} onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div>
              <button className="btn" type="submit">Submit</button>
              <button className="btn-outline" type="submit" onClick={reload}>Reload</button>
            </div>
          </form>
          <div className="center">
            <h3>Your BMI is :{bmi}</h3>
            <p>{message}</p>
          </div>
          <div className="img-container">
            <img src={imgSrc} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
