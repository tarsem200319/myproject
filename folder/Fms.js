import React, { useState} from 'react'  

function Fms (){                       //create obj in function
    const data={
    name:"",
    course:"",
    position:""
    };
    
    const [inputData, setInputData]= useState(data)
    const [arry,setArry]=useState([])
    
    function deleteData(index){          //create delete function
        console.log(index,"deleteData");
        const updatedArry = [...arry];
        updatedArry.splice(index, 1);
        setArry(updatedArry)
    }
    
    function handleData(e){             //Handling Events with spread operator
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const{name,course,position}=inputData;
        // if(name.trim() !== "" && clas.trim() !== "" && subject.trim() !== "")
         if(name !== "" && course !== "" && position !== ""){
        setArry([...arry,{name,course,position}]);
        console.log(arry);
        // setInputData(data);
        setInputData({
            name:"",
            course:"",
            position:""
        });
    }else{
        alert("Please fill in all fields")
    }
 }
 return (
    <>
    {/* <div>
    <pre>{<h2 className='ui-define'>Hello{inputData.name}, 
    You've Registered Successfully</h2>}</pre>
    </div> */}
    
    <form className='container' onSubmit={handleSubmit}>
        <div>
            <h1>Student Form</h1>
        </div>

    <div className='containers'>
        <div className='first-div'>
            <label>Name</label>
            <input 
            type='text'
            name='name' 
            placeholder='Enter name' 
            value={inputData.name} onChange={handleData}>
            </input>
        </div>

        <div className='second-div'>
            <label>Course</label>
            <input 
            type='text' 
            name='course' 
            placeholder='Enter course' 
            value={inputData.course} onChange={handleData}></input>
        </div>

        <div className='third-div'>
            <label>Position</label>
            <input 
            type='text'  
            name='position' 
            placeholder='Enter position' 
            value={inputData.position}  onChange={handleData}></input>
        </div>

        <div>
            <button type='submit'>Submit</button>
        </div>
    </div>
        </form>
    <table className='main-div'>
        <thead>
            <tr>
                <th>Sr. no</th>
                <th>Name</th>
                <th>Course</th>
                <th>Position</th>
                <th>Action</th>
            </tr>
        </thead>
    <tbody>
    { arry.map((item,index)=>{
        return <tr key={index}>
                    <td>{index+1}</td>
                    <td>{item.name}</td>
                    <td>{item.course}</td>
                    <td>{item.position}</td>
                    <td><button onClick={{}=deleteData}>Delete</button></td>
                </tr>
            })
        }
        </tbody>
        </table>
        </>
    )
}
export default Fms