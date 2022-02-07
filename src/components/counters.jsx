import React from 'react';
import Counter from './counterComponent';

class Counters extends React.Component{
   
    render(){
        return(
            <div>
                <button className="btn btn-primary m-2" onClick={this.props.onReset}>Reset</button>
                 {this.props.counters.map(counter =>  (
                     <Counter key = {counter.id} counter = {counter} onDelete = {this.props.onDelete} onIncrement = {this.props.onIncrement}/>
                 ))}
            </div>
        )
    }
}

export default Counters;