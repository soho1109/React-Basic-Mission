import styles from "./ProductCard.module.css";

function ProductCard({ name, price, brand }) {
  return (
    <article className={styles.card}>
      <h2>{name}</h2>
      <p>가격 : {price}원</p>
      <p>브랜드 : {brand}</p>
    </article>
  );
}

export default ProductCard;