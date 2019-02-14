import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID df03174c880e4217e152b47388aa17e244dc65b1b54ffd4ebdefdc16ea19f83b"
  }
});
