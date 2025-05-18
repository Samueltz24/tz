import styles from './Card.module.css'
function Card({ima}){
    return(
        <>
            <div className={styles.filho}>
                <img className={styles.imag} src={ima} alt="" />
                <div>
                    <button className={styles.cor}>Compra</button>
                </div>
            </div>
        
        </>
    )
}

export default Card 