import { connectRouter } from "connected-react-router"
import { combineReducers } from "redux"


// @test
function testReducer(state = 0) {
    return state
}


const createRootReducer = history => combineReducers(
    {
        test: testReducer,
        router: connectRouter(history)
    }
)
export default createRootReducer

