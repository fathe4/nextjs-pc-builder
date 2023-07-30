import React from "react";
import { Card, Col, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import Link from "next/link";
const { Meta } = Card;

const Categories = ({ categories }) => {
  return (
    <Row gutter={30} className="flex justify-center">
      {categories?.map((category) => {
        return (
          <Link
            key={category.categoryId}
            href={`/categoryProducts/${category.categoryId}`}
          >
            <Col className="centered-col m-2">
              <Card
                hoverable
                style={{
                  width: 200,
                }}
                cover={<img alt="example" src={category.img} />}
              >
                <Meta style={{ textAlign: "center" }} title={category.name} />
              </Card>
            </Col>
          </Link>
        );
      })}
    </Row>
  );
};

export default Categories;
