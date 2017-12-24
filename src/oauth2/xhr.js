import {TIMEOUT} from "./Oauth";
import {getAccessToken} from "./TokenService";
import axios from "axios";

export const securedGet = (url) => {
  return request(url, {method: "GET"});
};
export const securedPost = (url, data) => {
  return request(url, {method: "POST", data});
};

const request = (url, config) => {
  //TODO: validate and refresh token if expired
  let request = axios.create({
    timeout: TIMEOUT,
    headers: {...config.headers, "Authorization": 'Bearer ' + getAccessToken()}
  });
  return request(url, config)
    .then(response => {
      return response;
    }).catch(error => {
      console.debug("server.request.error", error);
    });
};
