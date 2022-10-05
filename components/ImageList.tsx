import images from "../mockData";
import Image from "next/image";
import { Popover } from "antd";

export const ImageList = (props: { sortBy: "name" | "date" }) => {
  const { sortBy } = props;
  const styles = {
    imageStyles: {
      border: "#ccc solid 0.3px",
      padding: 10,
      boxShadow: "10px 9px 21px -7px rgba(0,0,0,0.47)",
      webkitBoxShadow: "10px 9px 21px -7px rgba(0,0,0,0.47)",
      mozBoxShadow: "10px 9px 21px -7px rgba(0,0,0,0.47)",
    } as React.CSSProperties,
  };
  const imageList = [...images].sort((a: any, b: any) =>
    a[sortBy] < b[sortBy] ? 1 : -1
  );

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        columnGap: 20,
        rowGap: 20,
      }}
    >
      {imageList.map((m) => (
        <Popover
          key={m.name}
          content={<Tooltip name={m.name} description={m.description} />}
          title="Details"
          trigger="hover"
        >
          <div style={styles.imageStyles}>
            {m.imgLoc.substring(0, 1) === "/" ? (
              <Image
                src={m.imgLoc}
                layout={"fixed"}
                width={200}
                height={200} />
            ) : (
              <img src={m.imgLoc} height={200} width={200} />
            )}
          </div>
        </Popover>
      ))}
    </div>
  );
};

const labelStyle: React.CSSProperties = { fontWeight: "bolder" };

export const Tooltip = (props: { name: string; description: string }) => (
  <>
    <div>
      <span style={labelStyle}>{"Name: "}</span>
      {props.name}
    </div>
    <div>
      <span style={labelStyle}>{"Description: "}</span> {props.description}
    </div>
  </>
);
