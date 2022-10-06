import { Radio } from "antd";
import styles from "./DataSorter.module.css";

export const DataSorter = (props: {
  items: { id: string; label: string }[];
  onChange: (id: string) => void;
}) => {
  const { items, onChange } = props;
  return (
    <div>
      {"Sort by"}
      <Radio.Group
        className={styles.sortGroup}
        onChange={(e) => onChange(e.target.value)}
        defaultValue={"name"}
      >
        {items.map((item) => (
          <Radio.Button value={item.id}>{item.label}</Radio.Button>
        ))}
      </Radio.Group>
    </div>
  );
};
