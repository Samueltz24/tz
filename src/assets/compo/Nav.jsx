import {Link} from 'react-router-dom'
import styles from './Separa.module.css'
import img from '../pages/Img/menu.png'
import zap from '../pages/Img/zap.png'
import loja from '../pages/Img/looja.png'
import yt from '../pages/Img/youtube.png'
import { useState } from 'react';

function Nav() {
  const [mostrarLinks, setMostrarLinks] = useState(false); // começa escondido

  function toggleMenu() {
    setMostrarLinks(prev => !prev); // alterna entre mostrar e esconder
  }

  return (
    <nav className={styles.oi}>
      <button className={styles.button} onClick={toggleMenu}>
        <img src={img} alt="menu" />
      </button>

      {mostrarLinks && (
        <>
        <div className={styles.separa}>
            <Link className={styles.se} to="/" onClick={toggleMenu}>
            Produtos <img src={loja} alt="contato" />
          </Link>
          <Link className={styles.se} to="/Contato" onClick={toggleMenu}>
             Contato <img src={zap} alt="contato" />
          </Link>
          <Link className={styles.se} to="/Youtube" onClick={toggleMenu}>
            youtube <img src={yt} alt="contato" />
          </Link>
          <Link className={styles.se} to="/Contato" onClick={toggleMenu}>
            Contato
          </Link>
          <Link className={styles.se} to="/Contato" onClick={toggleMenu}>
            Contato
          </Link>
        </div>
        </>
      )}
    </nav>
  );
}

export default Nav;