import React from "react"
import {connect} from "react-redux"

const Doglist = props => {
return(
<>{props.error ? (<div className= "error">props.error</div>) : (<img src= {props.dogs.hdurl}/>)}</>

)}

const mapStateToProps = state => {
    return {
        dogs: state.dogs,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(Doglist)