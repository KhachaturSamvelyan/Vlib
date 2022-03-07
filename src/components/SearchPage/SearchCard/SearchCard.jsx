import styles from './SearchCard.module.css'


export default function SearchCard({title, img , authors, categories}) {
 
  return (
    <>
      <div className={styles.card}>
          <img src={img} alt="" />
          <h5>{title}</h5>
          <p>{authors}</p>
          <p className={styles.categories_p}>{categories}</p>
      </div>
    </>
  );
}


