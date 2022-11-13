import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import useControllerAudio from '../../../../hooks/useControllerAudio.hook';
import { useSelector } from "react-redux";

import styles from './Controlplayer.module.scss'

function Controlplayer() {
  const { ref, trackId } = useSelector((state) => state.controllerAudio);
  const refAudio = useRef(null);
  const dispatch = useDispatch();
  const controllerPlayer = useControllerAudio();

  useEffect(() => {
    dispatch(controllerPlayer.startControlerAudio(refAudio));
  }, []);

  useEffect(() => {
    console.log('ref', ref.current.attributes.src.value);
    ref.current.attributes.src.value = 'hola';
  }, [dispatch])
  
  return (
    <div className={styles.controlplayer}>
      <audio ref={refAudio} src=""></audio>
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