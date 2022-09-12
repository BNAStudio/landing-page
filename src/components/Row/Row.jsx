import React from 'react'
import PropTypes from 'prop-types'
import css from './Row.module.css'

export const Row = ({ ...props }) => {
        return <div className={`${css['row']}`} {...props} />
    }