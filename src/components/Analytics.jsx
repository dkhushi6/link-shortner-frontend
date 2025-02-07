import React, { useState } from "react";
import axios from "axios";
import pic from "../assets/picture.png";

const Analytics = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [visitor, setVisitor] = useState("");

  const handleAnalytics = async () => {
    try {
      const res = await axios.post(
        "https://link-shortner-backend-a7or.onrender.com/analytics",
        {
          shortUrl: fullUrl,
        }
      );
      console.log(res.data);
      setVisitor(res.data.visitors);
    } catch (error) {
      console.error("Error occurred !!!", error);
    }
  };
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="text-[50px] font-extrabold text-white w-[800px] flex gap-3 pb-3 justify-center flex-wrap ">
          <div>Track</div>
          <div className="text-[#8364D2]">Your Links</div>
          <div>, Understand</div>
          <div className="text-[#8364D2]">Your Audience</div>
        </div>
        <div className="text-[20px] font-semibold italic text-[#969696] pb-10 flex justify-center">
          Optimize your marketing with deep traffic insights
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center pt-5 ">
            <input
              type="text"
              placeholder="enter the full url"
              value={fullUrl}
              onChange={(e) => setFullUrl(e.target.value)}
              className="w-[500px] py-2 px-3  bg-[#303030]
          hover:border-[#6e6e6e] border border-[#444444] rounded-l-xl outline-none"
            />
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={handleAnalytics}
              className="py-2 px-3 bg-gradient-to-r from-purple-500 to-purple-800 hover:from-pink-500 hover:to-purple-900   rounded-r-xl font-semibold"
            >
              get analytics
            </button>
          </div>
        </div>

        <div>{visitor}</div>
      </div>
      <div className="">
        <img src={pic} alt="pic" className="w-[500px] h-[600px]" />
      </div>
    </div>
  );
};

export default Analytics;
