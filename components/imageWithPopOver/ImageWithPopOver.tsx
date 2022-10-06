import { Popover } from "antd";
import Image from "next/image";
import styles from "./imageWithPopOver.module.css";

export const ImageWithPopOver = (props: {
  imageDetails: { name: string; description: string; imgLoc: string };
}) => {
  const {
    imageDetails: { name, description, imgLoc },
  } = props;

  return (
    <Popover
      key={name}
      content={<Tooltip name={""} description={description} />}
      title="Details"
      trigger="hover"
    >
      <div className={styles.imageContainer}>
        {imgLoc.substring(0, 1) === "/" ? (
          <Image src={imgLoc} layout={"fixed"} width={200} height={200} />
        ) : (
          <img src={imgLoc} height={200} width={200} />
        )}
      </div>
    </Popover>
  );
};

export const Tooltip = (props: { name: string; description: string }) => (
  <>
    <div>
      <span className={styles.popOverLabel}>{"Name: "}</span>
      {props.name}
    </div>
    <div>
      <span className={styles.popOverLabel}>{"Description: "}</span>{" "}
      {props.description}
    </div>
  </>
);
