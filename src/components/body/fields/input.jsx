import styles from './input.module.css'

const Form = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return(
    <div className={styles.container_form}>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email, matrícula ou nome..."
        name="search" autoComplete='off' className={styles.search_btn} />
        <div className={styles.btn_container}>
          <input type="submit" value="PESQUISAR" className={styles.btn}/>
          <input type="button" value="FAZER PROTOCOLO" className={styles.btn}/>
        </div>
      </form>
    </div>
  )
}

export default Form; 