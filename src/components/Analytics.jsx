import React, { useState } from "react";
import axios from "axios";

const Analytics = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [visitor, setVisitor] = useState("");

  const handleAnalytics = async () => {
    try {
      const res = await axios.post("http://localhost:4006/analytics", {
        shortUrl: fullUrl,
      });
      console.log(res.data);
      setVisitor(res.data.visitors);
    } catch (error) {
      console.error("Error occurred !!!", error);
    }
  };
  return (
    <div>
      <div className="flex justify-center pt-5 ">
        <input
          type="text"
          placeholder="enter the full url"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
          className="w-[300px] py-2 px-3  bg-[#303030]
          hover:border-[#444444] border rounded-3xl outline-none"
        />
      </div>
      <div className="flex justify-center pt-5">
        <button
          onClick={handleAnalytics}
          className="w-[300px] py-2 px-3 border-[#444444] hover:bg-[#2F2F2F] rounded-3xl outline-none border"
        >
          get analytics{" "}
        </button>
      </div>

      <div>{visitor}</div>
    </div>
  );
};

export default Analytics;
