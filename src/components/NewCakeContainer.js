import React, {useState} from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)} />
      <button onClick={()=>props.buyCake(number)}>Buy Number Cakes</button>
    </div>
  )
}

// when you want to access redux state -  It takes the Redux store state as an argument and returns an object.
const mapStateToProps = state =>{
    return{
        // state properties
        numberOfCakes: state.cake.numberOfCakes
    }
}

// to dispatch - It maps the buyCake action creator to the props.
const mapDispatchToProps = dispatch=>{
    return{
        buyCake: (number)=> dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(NewCakeContainer)
