import RootLayout from "@/components/Layouts/RootLayout";
import React from "react";
import { Avatar, Col, Descriptions, List, Row } from "antd";
import Image from "next/image";

const Product = ({ product }) => {
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
        className="justify-center flex pt-10"
      >
        <Col className="gutter-row" span={6}>
          <div>
            <Image src={product?.image} width="300" height={500} />
          </div>
        </Col>
        <Col className="gutter-row flex align-middle items-center" span={142}>
          <div>
            <p className="text-2xl font-bold">{product?.productName}</p>
            <p className="my-2 text-lg">{product?.description}</p>

            <Descriptions
              column={{
                xxl: 1,
                xl: 1,
                lg: 1,
                md: 1,
                sm: 1,
                xs: 1,
              }}
              title="Product Info"
              bordered
            >
              <Descriptions.Item label="Status">
                {product?.status}
              </Descriptions.Item>
              <Descriptions.Item label="Category">
                {product?.category}
              </Descriptions.Item>
              <Descriptions.Item label="Rating">
                {product?.averageRating}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                {product?.price}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
        <Col span={12}>
          <Descriptions
            column={{
              xxl: 1,
              xl: 1,
              lg: 1,
              md: 1,
              sm: 1,
              xs: 1,
            }}
            title="Key Features"
            bordered
          >
            <Descriptions.Item label="Brand">
              {product?.keyFeatures?.Brand}
            </Descriptions.Item>
            <Descriptions.Item label="Brand">
              {product?.keyFeatures?.Model}
            </Descriptions.Item>
            <Descriptions.Item label="Brand">
              {product?.keyFeatures?.Specification}
            </Descriptions.Item>
            <Descriptions.Item label="Ports">
              {product?.keyFeatures?.Ports}
            </Descriptions.Item>
            <Descriptions.Item label="Type">
              {product?.keyFeatures?.Type}
            </Descriptions.Item>
            <Descriptions.Item label="Voltage">
              {product?.keyFeatures?.Voltage}
            </Descriptions.Item>
            <Descriptions.Item label="Interface">
              {product?.keyFeatures?.Interface}
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
      <Col span={12} className="mx-auto my-6">
        <h2 className="text-2xl">Reviews</h2>
        <List
          itemLayout="horizontal"
          dataSource={product?.reviews}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={item.username}
                description={item.comment}
              />
            </List.Item>
          )}
        />
      </Col>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://pc-builder-backend-jade.vercel.app/products`
  );
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { productId: product._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-backend-jade.vercel.app/product/${params.productId}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};

export default Product;

Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
