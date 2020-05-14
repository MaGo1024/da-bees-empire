import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import{ selectDirectorySections } from '../../redux/directory/directory-selector'

import MenuItem from '../menu-item/menu-item.components';
import './directory.styles.scss';

const Directory = ({ sections }) => (
            <div className='directory-menu'>
                {sections.map(({id, ...otherSectionProps}) => (
                    <MenuItem key = {id } {...otherSectionProps} />
        ))}
            </div>
);

const mapStatesToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStatesToProps)(Directory);