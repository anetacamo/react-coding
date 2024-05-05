import MenuItem from "../MenuItem/MenuItem";
import styles from "./Menu.module.scss";

const Header = ({ allPostData }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.inner}>
        <div className="flex">
          {allPostData.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Header;
