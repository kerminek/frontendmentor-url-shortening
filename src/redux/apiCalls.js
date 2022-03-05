import axios from "axios";
import { linksAdd } from "./linkRedux";

export const handleApi = async (dispatch, url) => {
  try {
    const res = await axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const linkObject = {
      originalLink: url,
      shortendLink: res.data.result.short_link,
    };
    dispatch(linksAdd(linkObject));
    console.log(res);
    return false;
  } catch (error) {
    console.log(error);
    return true;
  }
};
