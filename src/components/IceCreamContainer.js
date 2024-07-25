import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of IceCreams - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  )
}

// when you want to access redux state -  It takes the Redux store state as an argument and returns an object.
const mapStateToProps = state =>{
    return{
        // state properties
        numberOfIceCreams: state.iceCream.numberOfIceCreams
    }
}

// to dispatch - It maps the buyIceCream action creator to the props.
const mapDispatchToProps = dispatch=>{
    return{
        buyIceCream: ()=> dispatch(buyIceCream())
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(iceCreamContainer)
