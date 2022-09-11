import React from 'react'
import PropTypes from 'prop-types'
import css from './SwitchLanguage.module.css'

const SwitchLanguage = () => {
    return (
        <div className={css[`${'c-container__switch--language'}`]}>
            SwitchLanguage
        </div>
    )
}

SwitchLanguage.propTypes = {}

export default SwitchLanguage