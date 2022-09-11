import React from 'react'
import PropTypes from 'prop-types'
import css from './Template.module.css'
import { 
    Logo,
    NavMenu, 
    SwitchColor, 
    SwitchLanguage }
from '../index'

const Template = () => {
    return (
        <>
            <div className={css[`${'c-header'}`]}>
                <Logo />
                <NavMenu />
                <div className={css[`${'c-switch'}`]}>
                    <SwitchColor />
                    <SwitchLanguage />
                </div>
            </div>
        </>
    )
}

Template.propTypes = {}

export default Template