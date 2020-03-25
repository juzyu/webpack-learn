import config from './config';
import React, { Component } from 'react'

import styles from './juzyu.css';

class Juzyu extends Component{
  render() {
    return (
      <div className={styles.root}>
        {config.juzyuText}
      </div>
    );
  }
}

export default Juzyu