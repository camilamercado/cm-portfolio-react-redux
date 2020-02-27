import React from 'react';
import './style.scss';
import FaerieF from './images/shrooms-f.png';
import FaerieBB from './images/shrooms-bb.png';
import FaerieT from './images/shrooms-t.png';


const Faerie = () => (
  <section className="faerie-orb">
    <img className="em" alt="" id="f" src={FaerieF} />
    <img className="em" alt="" id="t" src={FaerieT} />
    <img className="em" alt="" id="bb" src={FaerieBB} />
  </section>
);

export default Faerie;
