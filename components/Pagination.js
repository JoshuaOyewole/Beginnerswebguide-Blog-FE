import styles from '../styles/Pagination.module.css'

export default function Pagination() {
  return (
    <div className='flex perfect-center mt-l col'>
        <p className={styles.pagesLength}>
            Pages 1 of 10
        </p>
        <p className={styles.pages}>1   2    3   4   5   6   7    8   9  10   Last</p>
    </div>
  )
}
