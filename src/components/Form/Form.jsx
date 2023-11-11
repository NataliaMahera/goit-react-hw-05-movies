// import css from './Form.module.css';

// const Form = () => {
//   //Значення з пошукового параметру, який записується в ключ query
//   const [searchParams, setSearchParams] = useSearchParams();
//   const queryValue = searchParams.get('query');

//   const onFormSubmit = e => {
//     e.preventDefault();
//     const value = e.currentTarget.elements.searchKey.value;

//     //Зміна обєкту пошукових параметрів після сабміту форми
//     setSearchParams({ query: value });
//   };
//   return (
//     <form className={css.searchForm} onSubmit={onFormSubmit}>
//       <label className={css.label}>
//         <input
//           type="text"
//           required
//           placeholder="Search movie"
//           name="searchKey"
//         />
//       </label>
//       <button type="submit">search</button>
//     </form>
//   );
// };

// export default Form;
