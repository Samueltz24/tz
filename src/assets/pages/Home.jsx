import Imagens from '../pages/Imagens'
import ima1 from './Img/carro.jpg'
import ima2 from './Img/moto.png'
import Card from '../pages/Card'
import styles from './Card.module.css'
function Home(){
    return(
        <>
        
        <div className={styles.para}>
            <p>Carros</p>
        </div>

        <div className={styles.card}>
        <Card ima={ima1}/>
        <Card ima={ima1}/>
        <Card ima={ima1}/>
        <Card ima={ima1}/>
        <Card ima={ima1}/>
        <Card ima={ima1}/>
        </div>

        <div className={styles.para}>
            <p>Motos</p>
        </div>

        <div className={styles.card}>
        <Card ima={ima2}/>
        <Card ima={ima2}/>
        <Card ima={ima2}/>
        <Card ima={ima2}/>
        <Card ima={ima2}/>
        <Card ima={ima2}/>
        </div>
        
        </>
    )
}

export default Home