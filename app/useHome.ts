"use client";
import { useState } from "react";

function useHome() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}

export default useHome;
