import { MapContainer, TileLayer, useMap, Marker,Popup } from 'react-leaflet'

const Map = ({lat,long}) => {

return(
  <MapContainer center={[lat,long]} zoom={13} scrollWheelZoom={false} >
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[lat,long]}>
    <Popup>
      чому координати саме такі генеруються :(
    </Popup>
  </Marker>
</MapContainer>
)
}


export default Map