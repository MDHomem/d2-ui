import React, { Component, PropTypes } from 'react';
import colorbrewer from './colorbrewer';

// Returns one color scale based on a code and number of classes
export default function ColorScale({scale, classes, style, onClick}) {
    const colors = colorbrewer[scale][classes];

    // console.log(style); // TODO: Why is it called twice?

    const styles = {
        scale: {
            paddingLeft: 0,
            marginRight: 20,
            height: 36,
            cursor: 'pointer',
            boxShadow: '0 1px 6px rgba(0,0,0,0.12),0 1px 4px rgba(0,0,0,0.12)',
            display: 'inline-block',
            ...style,
        }
    };

    const items = colors.map((color, index) => {
        const styles = {
            marginLeft: 0,
            display: 'inline-block',
            backgroundColor: color,
            width: 36,
            height: '100%',
        };

        return (<li key={index} style={styles} />);
    });

    return (
        <ul style={styles.scale} onClick={(event => onClick(event, scale))}>
            {items}
        </ul>
    );
}

