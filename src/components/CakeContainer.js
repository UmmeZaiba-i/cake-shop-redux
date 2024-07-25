import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
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
        buyCake: ()=> dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(CakeContainer)
