import Cell from "@/components/Table/Cell";
import Box from "@/components/Box";
import styles from "./MobileTableHeader.module.scss";
interface Props {
  headTitles: Array<string>;
}
function MobileTableHeader({ headTitles }: Props) {
  return (
    <Box
      className={styles.TableHeaderContainer}
      position="start"
      title="Recent Blocks"
      bottomLine={false}
    >
      <div className={styles.TableHeader}>
        {headTitles.map((title, i) => {
          return <Cell key={i}>{title}</Cell>;
        })}
      </div>
    </Box>
  );
}
export default MobileTableHeader;
