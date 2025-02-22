import axios from "axios";
import { ENV } from "../utils/constants";
import { storageCrtl } from "./storage";

async function getAllProductos() {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.GIFTCARDS}`;
    const token = await storageCrtl.getToken();

    const paramsTemp = {      
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        },
    };

    const response = await axios.get(url,paramsTemp);

    if (response.status !== 200) throw response;

    return response.data;
  } catch (error) {
    throw error;
  }
}

export const productosCtrl = {
  getAll: getAllProductos,
};