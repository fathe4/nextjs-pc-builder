import RootLayout from "@/components/Layouts/RootLayout";
import Products from "@/components/UI/Products/products";
import React from "react";

const CategoryProducts = ({ products }) => {
  return <Products products={products} isAddToBuilderBtnVisible={true} />;
};

export default CategoryProducts;

CategoryProducts.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://pc-builder-backend-jade.vercel.app/categories`
  );
  const categories = await res.json();

  const paths = categories.map((category) => ({
    params: { categoryId: category.categoryId },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `https://pc-builder-backend-jade.vercel.app/products?categoryId=${params.categoryId}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
