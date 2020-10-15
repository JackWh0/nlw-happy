import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
import mapIcon from '../utils/mapIcon';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Maceió</strong>
                    <span>Alagoas</span>
                </footer>
            </aside>

            <Map 
              center={[-9.6487357,-35.719373]}
              zoom={15.38}
              style={{ width:'100%', height:'100%' }}>
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  icon={mapIcon}
                  position={[-9.6487357,-35.719373]}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                    Lar das meninas 
                    <Link to="/orphanages/1">
                      <FiArrowRight size={20} color="#FFF"/>
                    </Link>
                  </Popup>
                </Marker>
            </Map>

            

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;