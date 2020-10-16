import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet'; 

import 'leaflet/dist/leaflet.css'

import logoIcon from '../images/logo-icon.svg';

import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={logoIcon} alt="app" />
          
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
      
        <footer>
          <strong>Santa Maria</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>

      <Map center={[-29.6866647, -53.833018]} zoom={15} style={{ width: '100%', height: '100%' }}>
        {/* Implementar escolha do TileLayer (também como variável de ambiente??) */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
        {/* <TileLayer url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`} /> */}
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
    )
  }
  
  export default OrphanagesMap;