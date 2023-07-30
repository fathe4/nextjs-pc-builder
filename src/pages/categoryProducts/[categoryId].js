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
  //   if (typeof window === "undefined") {
  //     return {
  //       paths: [],
  //       fallback: false,
  //     };
  //   }
  const res = await fetch(`${process.env.BASE_URL}/categories`);
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
  //   if (typeof window === "undefined") {
  //     return {
  //       props: {
  //         products: [],
  //       },
  //     };
  //   }

  const res = await fetch(
    `${process.env.BASE_URL}/products?categoryId=${params.categoryId}`
  );
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
};
