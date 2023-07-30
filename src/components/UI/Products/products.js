import { addToPcBuilder } from "@/redux/features/pcBuilder/PcBuilderSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Button, Card, Col, Row, Typography } from "antd";
const { Text } = Typography;

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Products = ({ products, isAddToBuilderBtnVisible }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const addToPcBuilderFunc = (product) => {
    dispatch(addToPcBuilder(product));
    router.push("/PcBuilder");
  };

  return (
    <>
      <Row gutter={30} className="flex justify-center py-6">
        {products?.map((product) => (
          <Col key={product._id} className="centered-col m-2">
            <Card
              style={{ width: 250 }}
              hoverable
              cover={
                <Link href={`/product/${product._id}`}>
                  <img
                    width={250}
                    height={250}
                    alt="product img"
                    src={product.image}
                  />
                </Link>
              }
            >
              <Link href={`/product/${product._id}`}>
                <Row>
                  <Text style={{ textAlign: "center" }} strong>
                    {product.productName}
                  </Text>
                </Row>
                <Row>
                  <Text style={{ textAlign: "center" }} strong type="secondary">
                    Category:
                  </Text>
                  <Text style={{ textAlign: "center" }} type="secondary">
                    {product.category}
                  </Text>
                </Row>
                <Row>
                  <Text type="secondary" strong>
                    Price:
                  </Text>
                  <Text type="secondary">{product.price}$</Text>
                </Row>
                <Row>
                  <Text type="secondary" strong>
                    Stock:
                  </Text>
                  <Text type="secondary">{product.status}</Text>
                </Row>
                <Row>
                  <Text type="secondary" strong>
                    Rating:
                  </Text>
                  <Text type="secondary">{product.averageRating} Star</Text>
                </Row>
              </Link>
              {isAddToBuilderBtnVisible && (
                <Button
                  onClick={() => addToPcBuilderFunc(product)}
                  className="my-4"
                  type="primary"
                >
                  Add To Builder
                </Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Products;
