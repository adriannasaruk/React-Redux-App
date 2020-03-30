import React from "react";
import {connect} from "react-redux"
import {getData} from "../actions/index"




const DogForm = props => {
    const handle = e => {
        e.preventDefault();
        props.getData();
    }
    return (
        <div>
        {props.isFetchingData ? (<div>we are fetching data</div>)
         : (<button onClick={handle}>Show me the picture</button>)}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetchingData: state.isFetchingData
    }
}
export default connect(mapStateToProps, {getData})(DogForm);