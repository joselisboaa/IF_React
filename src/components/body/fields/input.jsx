import styles from './input.module.css'

const Form = (props) => {

  // const [search, setSearch] = useState();
  // const { register, handleSubmit, formState: { errors } } = useForm();

  // const getStudent = async () => {
  //   const response = await fetch("http://localhost:5173/api/students.json");
  //   const result = await response.json();

  //   return result;
  // }


  // const handleSearch = searchResult => searchResult.search ===
  // (searchResult.search === getStudent().then(data => data.students.filter(infos => Object.values(infos).includes(searchResult.search) && setSearch(searchResult.search))))

  // console.log(search)

  return(
    <div className={styles.container_form}>
      <form /*onSubmit={handleSubmit(handleSearch)}*/>
        <input type="text" placeholder="Email, matrícula ou nome..."
        name="search" /*{...register("search")}*/ autoComplete='off' className={styles.search_btn} />
        <div className={styles.btn_container}>
          <input type="submit" value="PESQUISAR" className={styles.btn}/>
          <input type="button" value="FAZER PROTOCOLO" className={styles.btn}/>
        </div>
      </form>
    </div>
  )
}

export default Form; 