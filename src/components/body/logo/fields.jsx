import logo from '../../../assets/logo.svg'
import styles from './fields.module.css'

const Logo = () => {
  return(
    <div className={styles.container_logo}>
      <h1>ALon</h1>
      <img src={logo} alt="ALon"></img>
    </div>
  )
}

export default Logo;