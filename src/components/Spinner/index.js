import React from 'react';
import PropTypes from 'prop-types'
import styles from './styles.module.css'

function Spinner(color) {
    return <div style={{borderLeftColor:color}} className={styles.loader}/>;
}

Spinner.propTypes = {
    color:PropTypes.string,
};

Spinner.defaultProps = {
    color: "blue"
};

export default Spinner
