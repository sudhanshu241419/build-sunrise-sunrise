import axios from "react-native-axios";


const instance = axios.create({  
  baseURL:"https://sslkrypson.com/magento24/rest/V1/"
});

axios.defaults.headers.post['Content-Type'] ="application/json";

instance.defaults.headers.common["authorization"] =
  "Bearer ttb3qqt188wel6wqze0aryok7ppa31qr";

export default instance;


// instance.defaults.headers.common["authorization"] =
//   "Bearer o7seezu88qyg3fv11wocae3w46emj27v";
//baseURL: "http://18.221.31.251/magento24/rest/V1/"