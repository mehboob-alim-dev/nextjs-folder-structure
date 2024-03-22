"use client";
import React from "react";
import useHome from "./useHome";

function Home({ initialCount }: any) {
  const { count, setCount } = useHome();

  // Set the initial count from server-side props
  setCount(initialCount);

  return (
    <>
      <h1>Main page</h1>
      <p>home page updated</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  );
}

export default Home;
