import axios from "axios";
import { ENV } from "../utils/constants";
import { storageCrtl } from "./storage";

async function crearCheckout(productId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CHECKOUT}/${productId}`;
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

async function crearCompra(productId, nombrecliente, rut, telefono) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.CREARPAGO}/${productId}`;
    const token = await storageCrtl.getToken();

    const paramsTemp = {      
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        },
    };

    const response = await axios.post(url,{
      nombrecliente,
      rut, 
      telefono
    },paramsTemp);

    if (response.status !== 200) throw response;

    return response.data;
  } catch (error) {
    throw error;
  }
}

async function verHistorial() {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.HISTORIAL}`;
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


export const ventasCtrl = {
  checkout: crearCheckout,
  crearCompra,
  verHistorial
};