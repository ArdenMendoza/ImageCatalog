import images from "../MockData.json";
import Image from "next/image";
import { Popover } from "antd";

export const ImageList = () => {
  return images.map((m) => (
    <Popover
      content={<Tooltip name={m.name} description={m.description} />}
      title="Details"
      trigger="hover"
    >
      <Image src={m.imgLoc} layout={"fixed"} width={200} height={200} />
    </Popover>
  ));
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
