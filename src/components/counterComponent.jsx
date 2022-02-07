import React from "react";


class Counter extends React.Component{
  
    
   render(){
       let classes = this.getBadgeClasses();
     return(
     <div>
         <span className={classes}>{this.formatCount()}</span>
         <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary bt-sm m-2">Increment</button>
         <button className="btn btn-danger bt-sm m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
         <br />
     </div>
     );
   }

    getBadgeClasses() {
        let classes = "badge m-2 fs-5 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

   formatCount(){
       const {value} = this.props.counter;
       return value === 0 ? "zero" : value; 
   }
}

export default Counter;