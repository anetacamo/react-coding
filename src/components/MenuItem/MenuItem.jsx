import styles from "./MenuItem.module.scss";
import Link from "next/link";

const MenuItem = ({ item }) => {
  console.log(item);
  return (
    <>
      {item.published && (
        <Link href={`/posts/${item.id}`}>
          <li className={styles.item}>{item.title}</li>
        </Link>
      )}
    </>
  );
};
export default MenuItem;
