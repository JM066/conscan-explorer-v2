import style from "./Wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}
function Wrapper({ children }: Props) {
  return <div className={style.Wrapper}>{children}</div>;
}
export default Wrapper;
