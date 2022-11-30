import React from "react";
import HeadlineItem from "./HeadlineItem";

const Headline = () => {
  const headlineData = [
    {
      id: 1,
      item: "Sun's Out, BOGO's Out",
      time: "Through 8/26",
      img: "https://images.unsplash.com/photo-1663059364204-e33b6bb49cc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      id: 2,
      item: "New Restaurants",
      time: "Added Daily",
      img: "https://images.unsplash.com/photo-1520252729650-ddced2015543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      item: "We Deliver Desserts Too",
      time: "Tasty Treats",
      img: "https://images.unsplash.com/photo-1521886655570-97530ff9454b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdHJ5JTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="max-w-[1540px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      
      {headlineData.map((data) => (
        <HeadlineItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default Headline;
