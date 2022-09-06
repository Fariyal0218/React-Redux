import { addValue } from "./actions"

import { bindActionCreators } from "redux"
import { connect } from "react-redux"

const AddCounter=(props)=>{
    return(
        <div>
            <button onClick={()=>props.dispatch(addValue())}>Add</button>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        actions:bindActionCreators(addValue,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)
