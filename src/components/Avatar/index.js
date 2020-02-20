import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react'
import { mdiAccount } from '@mdi/js'

class Avatar extends Component{
    render() {
        return null;
    }
}

Avatar.propTypes = {
    src:PropTypes.string.isRequired,
    firsName: PropTypes.string.isRequired,
    LastName: PropTypes.string.isRequired,
    className: PropTypes.string,
};
Avatar.defaultProps = {
    className: '',
    alt: 'avatar'
};

export default Avatar;
