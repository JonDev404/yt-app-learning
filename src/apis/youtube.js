import axios from "axios";

const KEY = "AIzaSyDheSHLVCQGf03Vn76zA6TjtCqfh148pFM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
