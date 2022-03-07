import styles from '../styles/SlideShow.module.css'


function SlideShow(props) {
    const {title, description} = props;

    return (
         <div className={styles.slideshow}>
             <h1 className={styles.title}>
                {title}
            </h1>
            <p className={styles.description}>
                {description}  
            </p>
         </div>
    )
}

export default SlideShow