import Head from "next/head";
import { Button } from "antd";
import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import Product from "@/components/UI/Products/products";

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>Walton PC Builder</title>
        <meta name="description" content="Walton PC Builder" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="">
        <div className="">
          <Banner />
        </div>
        <div className="basis-1/4"></div>
      </div>
      <div className="my-8">
        <h3 className="text-center text-3xl mb-6">Featured Categories</h3>
        <Categories categories={categories} />
      </div>
      <div className="my-8">
        <h3 className="text-center text-3xl mb-6">Featured Products</h3>
        <Product products={products} />
      </div>
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  //   if (typeof window === "undefined") {
  //     return {
  //       props: {
  //         categories: [],
  //         products: [],
  //       },
  //     };
  //   }
  const categoryRes = await fetch(`${process.env.BASE_URL}/categories`);
  const categoryData = await categoryRes.json();
  const productRes = await fetch(`${process.env.BASE_URL}/products`);
  const productData = await productRes.json();
  return {
    props: {
      categories: categoryData,
      products: productData.slice(0, 6),
    },
    revalidate: 10,
  };
};
