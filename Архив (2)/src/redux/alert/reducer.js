import { SHOW_ALERT, HIDE_ALERT} from './constants'

const initialState = {
    isShow: false
}

function AlertReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, isShow: true}
        case HIDE_ALERT: 
            return {...state, isShow: false}
        default:
            return state
    }
}

export default AlertReducer