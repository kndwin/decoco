import { useEffect, useState, useRef } from 'react'
import styles from './Map.module.scss'

export default function Map() {
  const ref = useRef()

  useEffect(() => {
    const apiKey = 'key=AIzaSyAczntorLtBefdC-cWYSSvC_yYeQwUCOgo';
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?' + apiKey;
    document.head.appendChild(script);
    script.addEventListener('load', () => {
      createGoogleMap();
    })
  })

  const createGoogleMap = () => {
    const shop = {lat: -33.927444, lng: 151.047991};

    var map = new window.google.maps.Map(ref.current, { 
      zoom: 16, 
      center: shop 
    });

    var marker = new window.google.maps.Marker({ 
      map: map, 
      position: shop,
      title: "865 Punchbowl Road, Punchbowl",
      animation: window.google.maps.Animation.DROP
    })
    
    var infoWindow = new window.google.maps.InfoWindow({
      content: "865 Punchbowl Rd, Punchbowl"
    })

    marker.addListener('click', () => {
      infoWindow.open(map, marker);
    })
  }
  
  return (
    <div className={styles.container}>
      <div ref={ref}
        className={styles.map}
      />
    </div>
  )
}
