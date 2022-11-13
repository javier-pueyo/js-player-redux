import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import useControllerAudio from 'hooks/useControllerAudio.hook';
import { useSelector } from "react-redux";
import {useContext} from 'react';
import {AudioContext} from '../../../../context/Context'
import pausaImg from '../../../../assets/pausa.png';
import playImg from '../../../../assets/play.png';

import styles from './Controlplayer.module.scss'

function Controlplayer() {
  const { trackUrl, trackId, isPlay } = useSelector((state) => state.controllerAudio);
  const refAudio = useRef(null);
  const dispatch = useDispatch();
  const controllerPlayer = useControllerAudio();
  const audioContext = useContext(AudioContext);
  const [timer, setTimer] = useState('00 : 00');

  const formatTimer = (timer) => {
    let time = Math.round(timer);
    const seconds = (Math.floor(time % 0x3C)).toString().padStart(2, '0');
    const minutes  = (Math.floor(time / 0x3C ) % 0x3C).toString().padStart(2, '0');
    return `${minutes} : ${seconds}`;
  }

   useEffect(() => {
    audioContext.setStateAudio(refAudio);
    //console.log('testtt', audioContext.audio.current.attributes.src.value);
  }, [refAudio, audioContext]);

   useEffect(() => {

    let intervals = 0;

    refAudio.current.addEventListener('play', (event) => {
      intervals = setInterval(() => {
        setTimer(formatTimer(refAudio.current.currentTime));
      }, 500);
    });

    refAudio.current.addEventListener('pause', (event) => {
      clearInterval(intervals);
    });

  }, []);
  
  const tooglePlay = () => {
    if (isPlay) {
      dispatch(controllerPlayer.setStopAudio())
    } else {
      dispatch(controllerPlayer.setPlayAudio())
    }
  }
  
  return (
    <div className={styles.controlplayer}>
      <audio ref={refAudio} src={trackUrl}></audio>
      <button className={styles.previous}><img src="./assets/anterior.png" alt="" onClick={() => {dispatch(controllerPlayer.setPreviewAudio())}}/></button>
      <button className={styles.play}><img src={isPlay ? pausaImg : playImg} alt="" onClick={tooglePlay}/></button>
      <button className={styles.next}><img src="./assets/siguiente.png" alt="" onClick={() => {dispatch(controllerPlayer.setNextAudio())}}/></button>
    	<div id="timeline" className={styles.timeline}>
		    <div id="playhead" className={styles.playhead}></div>
	    </div>
      <div className={styles.time}>{timer}</div>
    </div>
  )
}

export default Controlplayer