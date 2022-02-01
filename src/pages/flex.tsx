import styles from './flex.module.css'

const Flex = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
      <div className={styles.child}></div>
    </div>
  )
}

export default Flex
