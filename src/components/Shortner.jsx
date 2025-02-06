import { useState } from "react";
import axios from "axios";

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
    <div className="flex justify-center items-center">
      <div>
        <div className="flex justify-center pt-5 ">
          <input
            type="text"
            placeholder="enter the longURL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="w-[300px] py-2 px-3  bg-[#303030]
          hover:border-[#444444] border rounded-3xl outline-none"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button
            onClick={handleUrl}
            className="w-[300px] py-2 px-3 border-[#444444] hover:bg-[#2F2F2F] rounded-3xl outline-none border"
          >
            get shortUrl
          </button>
        </div>
      </div>

      <div>{shortUrl}</div>
    </div>
  );
}

export default Shortner;
