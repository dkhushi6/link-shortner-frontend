import { useState } from "react";
import axios from "axios";
import pic from "../assets/picture.png";

function Shortner() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleUrl = async () => {
    try {
      const res = await axios.post("http://localhost:4006/shortner", {
        longURL: longUrl,
      });
      console.log(res.data);
      setShortUrl(res.data.url);
    } catch (error) {
      console.error("Error occurred !!!", error);
    }
  };

  return (
    <div className=" flex justify-between items-center">
      <div>
        <div className="text-[60px] font-extrabold text-white w-[800px] flex gap-3 pb-3 justify-center ">
          <div>Your</div>
          <div className="text-[#8364D2]">Links</div>
          <div>, Just</div>
          <div className="text-[#8364D2]">Smarter!</div>
        </div>
        <div className="text-[20px] font-semibold italic text-[#969696] pb-10 flex justify-center">
          Shorten your links in seconds and track their performance effortlessly
        </div>
        <div className="flex justify-center">
          <div className="flex justify-center pt-5 ">
            <input
              type="text"
              placeholder="enter the longURL"
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="w-[500px] py-2 px-3  bg-[#303030]
          hover:border-[#6e6e6e] border border-[#444444] rounded-l-xl outline-none"
            />
          </div>
          <div className="flex justify-center pt-5">
            <button
              onClick={handleUrl}
              className=" py-2 px-3 bg-gradient-to-r from-purple-500 to-purple-800 hover:from-pink-500 hover:to-purple-900   rounded-r-xl font-semibold"
            >
              ShortUrl
            </button>
          </div>
        </div>

        <div className="text-[17px] italic pt-8 underline text-[#5685CD] flex justify-center">
          {shortUrl}
        </div>
      </div>
      <div className="">
        <img src={pic} alt="pic" className="w-[500px] h-[600px]" />
      </div>
    </div>
  );
}

export default Shortner;
