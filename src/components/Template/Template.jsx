import React from 'react'
import PropTypes from 'prop-types'
import css from './Template.module.css'
import { Header } from '../index'

const Template = () => {
    return (
        <div className={css[`${'c-header'}`]}>
            <div className={css[`${'header__logo'}`]}> LOGO </div>
            <Header />
        </div>
    )
}

Template.propTypes = {}

export default Template