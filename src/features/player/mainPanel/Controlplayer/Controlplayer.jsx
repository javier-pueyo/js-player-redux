import React from 'react'

import styles from './Controlplayer.module.scss'

function Controlplayer() {
  return (
    <div className={styles.controlplayer}>
      <button className={styles.previous}><img src="./assets/anterior.png" alt="" /></button>
      <button className={styles.play}><img src="./assets/play.png" alt="" /></button>
      <button className={styles.next}><img src="./assets/siguiente.png" alt="" /></button>
    	<div id="timeline" className={styles.timeline}>
		    <div id="playhead" className={styles.playhead}></div>
	    </div>
      <div className={styles.time}>01:10</div>
    </div>
  )
}

export default Controlplayer