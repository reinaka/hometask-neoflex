import styles from './quantity-controls.module.css';

export const QuantityControls = () => {
    return (
        <div className={styles.general}>
            <button className={styles.button}>
                <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14V2H0V0Z" fill="white"/>
                </svg>
            </button>
            <div>1</div>
            <button className={styles.button}>
                <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.20557 6V0H8.20557V6H14.2056V8H8.20557V14H6.20557V8H0.205566V6H6.20557Z" fill="white"/>
                </svg>
            </button>
        </div>
    )
}