import styles from '../compo/Separa.module.css'
import Img from './Img/zap.png'
import Loja from './Img/loja.png'
function Contato(){
    return(
        <div className={styles.boi}>
            <div className={styles.marge}>
                <div className={styles.sem}>
                    <p>fale com nosco <img src={Loja} alt="" /></p>
                </div>
                <div className={styles.sem}>
                    <button className={styles.fale}>(81) 9 8888-8888 <img src={Img} alt="" /></button>
                </div>
            </div>
        </div>
    )
}

export default Contato