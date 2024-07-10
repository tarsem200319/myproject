import React,{ useState } from 'react' 


const TodoList = () => {            //create 1st arrowFunction


  const [num, setNum] = useState(0) //create simple useState


  const incNum = () =>{             //create arrowFunction incNuc
    setNum(num + 1)
  }

  const decNum = () =>{             //create arrowFunction decNum with if,else
    if(num>0){
    setNum(num - 1)
  }
  else{
      alert("Sorry, Zero Limit Reached")
      setNum(0)
  }
  }

  const incNums = () =>{
    setNum(num+1)
  }

  const incNumss = () =>{
    setNum(num+2)
  }

  const incNumsss = () =>{
    setNum(num+3)
  }

  const incNumssss = () =>{
    setNum(num+4)
  }
 
  const incNumsssss = () =>{
    setNum(num+5)
  }

  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <h1>{num}</h1>
        <div className='btn_div'>
            <button onClick={incNum}>Increm</button>
            <button onClick={decNum}>Decrem</button> 
        </div>
        <div className='btn_div'>
            <button onClick={incNums} >1</button>
            <button onClick={incNumss}>2</button>
            <button onClick={incNumsss}>3</button>
            <button onClick={incNumssss}>4</button>
            <button onClick={incNumsssss}>5</button>
        </div>
        </div>

    </div>
    </>
  )
}

export default TodoList