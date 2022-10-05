import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import { ImageList } from "../components/ImageList";
import { Radio } from "antd";

const Home: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const eHandlers = React.useMemo(
    () => ({
      onAddImageBtnClick: () => {
        setModalIsOpen(true);
      },
      onCloseModal: () => {
        setModalIsOpen(false);
      },
    }),
    []
  );

  const [sortBy, setSortBy] = React.useState<"name" | "date">("name");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        rowGap: 20,
      }}
    >
      <button
        style={{
          display: "flex",
          alignSelf: "center",
        }}
        onClick={eHandlers.onAddImageBtnClick}
      >
        {"Add Image"}
      </button>
      <div>
        {"Sort by"}
        <Radio.Group
          style={{ marginLeft: 10 }}
          onChange={(e) => setSortBy(e.target.value)}
          defaultValue={"name"}
        >
          <Radio.Button value={"name"}>{"Name"}</Radio.Button>
          <Radio.Button value={"date"}>{"Date"}</Radio.Button>
        </Radio.Group>
      </div>
      <ImageList sortBy={sortBy} />
    </div>
  );
};

export default Home;
