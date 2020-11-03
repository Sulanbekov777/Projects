import React from 'react'
import { hideAlert } from '../redux/actions'
import { connect } from 'react-redux';

function Alert (props) {
    return (
        <div
        className={`alert alert-${alert.type || "warning"} alert-dismissible`}
        >
            <strong>Внимание!</strong>
            &nbsp;{alert.text} Был отправлен get запрос
            <button
                onClick={() => props.hideAlert()}
                type="button"
                className="close"
                aria-label="Close"
            >
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default connect(null, {hideAlert})(Alert);