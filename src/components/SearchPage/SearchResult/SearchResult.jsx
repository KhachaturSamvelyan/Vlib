import SearchCard from "../SearchCard/SearchCard";
import Grid from "@mui/material/Grid";
import styles from "./SearchResult.module.css";
import bookCover from './img/defaultCover.png';

const SearchResult = ({ books, countResult }) => {
  return (
    <>
      {books.length ? (
        <div className={styles.main}>
          <p className={styles.result_title}>Found {countResult} results</p>
          <Grid container spacing={4} className={styles.main_blok}>
            {books.map((elem, index) => {
              return (
                <Grid item xs={3} key={elem + index}>
                  <SearchCard
                    img={elem.img !== undefined ? elem.img : bookCover}
                    title={elem.title}
                    authors={elem.authors !== undefined ? elem.authors.map((e)=> <span key={e}>{e}</span>) : [] }
                    categories={elem.categories !== undefined ? elem.categories.map((el)=> <span  key={el}>{el}</span>) : [] }
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
      ) : (
        false
      )}
    </>
  );
};

export default SearchResult;
