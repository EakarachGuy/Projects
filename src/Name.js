import React from 'react';

const Name = props => {
    const addAge = () => {
        props.children=props.children+1
    }
    return (<div>
        <p>{props.title}{props.children}to</p>
        <button onClick={addAge}>add</button>
    </div>
    )
}
export { Name };



// class Name extends Component{
// render(){
//     return(
//     <div>        
//         <p>Guy</p>
//     </div>
//     )
// }

// }
// export default Name;