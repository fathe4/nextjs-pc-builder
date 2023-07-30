import RootLayout from "@/components/Layouts/RootLayout";
import React, { useState } from "react";
import { Avatar, Button, List, Skeleton } from "antd";
import { useAppSelector } from "@/redux/hook";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PCForm = () => {
  const { components } = useAppSelector((state) => state.pcBuilder);

  const [pcComponents, setPCComponents] = useState(components);
  const totalAddedComponents = components?.filter(
    (component) => component.productName
  );
  const notify = () =>
    toast("Added To the cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  console.log(totalAddedComponents, "isAbleToPurchase");
  return (
    <div className="container mx-auto flex flex-col lg:flex-col sm:flex-row py-10">
      <div className="basis-1/4 "></div>
      <List
        className="demo-loadmore-list basis-2/4"
        itemLayout="horizontal"
        dataSource={pcComponents}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Link
                href={`/categoryProducts/${item.categoryId}`}
                key={item.categoryId}
              >
                <Button key="select-product">Choose</Button>
              </Link>,
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={
                      item?.image
                        ? item.image
                        : "https://cdn3.iconfinder.com/data/icons/online-states/150/Photos-512.png"
                    }
                  />
                }
                title={item?.category}
                description={
                  <>
                    <h4>{item?.productName}</h4>
                    <h4>Status: {item?.status}</h4>
                    <h4>Ratings: {item?.averageRating}</h4>
                  </>
                }
              />
              <div>{item.price ? item.price : 0}$</div>
            </Skeleton>
          </List.Item>
        )}
      />
      <Button
        type="primary"
        className="my-4"
        onClick={() => notify()}
        disabled={totalAddedComponents.length < 5}
      >
        Complete Build
      </Button>
      <ToastContainer />

      <div className="basis-1/4"></div>
    </div>
  );
};

export default PCForm;
PCForm.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
