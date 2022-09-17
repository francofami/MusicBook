import React, {useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const markerPosition = {
    lat: -34.6037517,
    lng: -58.3817277
};

const PruebaMapa = (props) => {

  const { marcador, setMarcador } = props

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBNJhIknwSU-3JCGv3vdZLardDpR1BoLCU"
  })

  const [map, setMap] = useState(null)
  //const [marcador, setMarcador] = useState("")

  const state  = {
    marcador: marcador
  };

  const onLoad = React.useCallback(function callback(map) {
    setMap(map)
  }, [])

  const onLoadMarker = marker => {
    console.log('marker: ', marker)
  }

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onDragEnd = e => {

    setMarcador(e)

  }

  const onUnmountMarker = e => {

  }

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={11}
        onLoad={onLoad}
        onUnmount={onUnmount}  
      >
        { /* Child components, such as markers, info windows, etc. */ 
            <>
            <Marker
                  onLoad={onLoadMarker}
                  position={markerPosition}
                  draggable={true}
                  onDragEnd={onDragEnd}
                  onUnmount={onUnmountMarker} />
            </>
        }
        <></>
      </GoogleMap>
  ) : <></>
}

//export default React.memo(PruebaMapa)
export default PruebaMapa