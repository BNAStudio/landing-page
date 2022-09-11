import React from 'react'
import PropTypes from 'prop-types'
import css from './Logo.module.css'

const Logo = () => {
    return (
        <div className={css[`${'c-logo'}`]}>
            <a href='#'> Logo </a>
        </div>
    )
}

Logo.propTypes = {}

export default Logo