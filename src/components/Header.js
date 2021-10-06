import PropTypes from 'prop-types';
import React from 'react'
import Button from './Button'

function Header({ title, onAdd, showAdd }) {
    
    return (
        <header className="header">
            <h1>{title}</h1> 
            <Button color={showAdd ? "gray" : "green"} text={showAdd ? "close" : "Add"} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header
