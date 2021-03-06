import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ mensaje }) => {
    return (
        <p className="red darken-4 error">{mensaje}</p>
    )
}
// Documentar componente
Error.propTypes = {
    mensaje : PropTypes.string.isRequired
}

export default Error
