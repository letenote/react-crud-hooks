import Axios from "axios";

export default Axios.create({
  baseURL: "http://localhost:2999",
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})