import axios from "axios"


export const getJobs = async () => {
  return axios.get(
    "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
  ).then(res=>res.data).catch(error=>console.log(error))
};