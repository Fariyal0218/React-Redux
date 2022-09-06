import { connect } from "react-redux"

// const Counter=(props)=>{
    
    const Counter=()=>{
    return(
        <div>
            <h1>Counter App</h1>
            {/* <p>Count is : {props.count}</p> */}
            <p>Count is :{}</p>
        </div>
    )
}

//used To read state value

const mapStateToProps=(state)=>{
    return{

            count:state.CounterReducer
    }
}

//connect react app with redux

//export default connect(mapStateToProps)(Counter)

export default connect(Counter)