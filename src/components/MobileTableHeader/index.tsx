import Box from "@/components/Box";
import styles from "./MobileTableHeader.module.scss";
interface Props {
  headTitles?: Array<string>;
  header: string;
}
function MobileTableHeader({ headTitles, header }: Props) {
  return (
    <Box
      className={styles.TableHeaderContainer}
      position="start"
      title={header}
      bottomLine={false}
    >
      {headTitles && (
        <div className={styles.TableHeader}>
          {headTitles.map((title, i) => {
            return <div key={i}>{title}</div>;
          })}
        </div>
      )}
    </Box>
  );
}
export default MobileTableHeader;
