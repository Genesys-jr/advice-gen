"use client";

import React, { useEffect, useState } from "react";

type SlipType = {
  slip: {
    slip_id: number;
    advice: string;
  };
};

const FetchAdvice = () => {
  const [data, setData] = useState<SlipType | undefined>();

  const fetchApiData = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const responseAdvice: SlipType = await res.json();
      setData(responseAdvice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div>
      <h1>{data?.slip.advice}</h1>
    </div>
  );
};

export default FetchAdvice;
