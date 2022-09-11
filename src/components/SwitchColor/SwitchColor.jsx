import React from 'react'
import PropTypes from 'prop-types'
import css from './SwitchColor.module.css'

const SwitchColor = () => {
    return (
        <div className={css[`${'c-container__switch--theme'}`]}>
            SwitchColor
        </div>
    )
}

SwitchColor.propTypes = {}

export default SwitchColor