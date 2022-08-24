import styles from './body.module.css'
import Form from './fields/input.jsx'
import Logo from './logo/fields.jsx'

const Body = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Form />
      </div>
    </div>
  )
}

export default Body;