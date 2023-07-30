import React, { useRef, useState } from "react";
import { Carousel } from "antd";
import Image from "next/image";
const contentStyle = {
  height: "500px",
  color: "#fff",
  lineHeight: "500px",
  textAlign: "center",
  background: "#364d79",
};

export default function Banner() {
  return (
    <>
      <Carousel autoplay>
        <div>
          <img src="/banner1.jpg" width={"100%"} height="600" />
        </div>
        <div>
          <img
            src="https://waltonbd.com/image/catalog/Computer/Desktop/desktop-2.jpg"
            width={"100%"}
            height="600"
          />
        </div>
        <div>
          <img
            src="https://waltonbd.com/image/catalog/Computer/Desktop/Desktop-Group.jpg"
            width={"100%"}
            height="600"
          />
        </div>
      </Carousel>
    </>
  );
}
