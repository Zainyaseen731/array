import React,{Component} from "react";

/*const Student=()=>{
 const arr=[10,20,30,40,50];            for array

 const newArr=arr.map((num)=>{
     return <li>{num*2}</li>
 });
 console.log("Oldarr ",arr);
 console.log("newarr ",newArr);
 return(
     <ul>{newArr}</ul>

     <ul>
         <li>{arr[0] * 2}</li>
         <li>{arr[1]* 2}</li>
         <li>{arr[2]* 2}</li>
         <li>{arr[3]* 2}</li>
         <li>{arr[4]* 2}</li>
     </ul>
 )
}*/

class Student extends Component{

    state={
        arr:[
            {id:21, name:"zain", class:"bsit"},
            {id:23, name:"Khansa", class:"bsit"},
            {id:66, name:"Mishal", class:"bsit"},
        ]
    };
    
    render(){
        const newArr=this.state.arr.map((arrs)=>{
            return <h1 key={arrs.id}>{arrs.name}</h1>
        })
        return(
            <div>
              <h1>{newArr}</h1>
            </div>
        )
    }
}
export default Student;