import jwtDecode from "jwt-decode";
import {CLIENT_ID, CLIENT_SECRET, TIMEOUT} from "./Oauth";
import axios from "axios";
import {securedGet} from "./xhr";

const ACCESS_TOKEN = "access_token";
const REFRESH_TOKEN = "refresh_token";

export const requestToken = (code, history) => {

  let tokenRequest = axios.create({
    headers: {
      "Authorization": 'Basic ' + btoa(decodeURIComponent(encodeURIComponent(CLIENT_ID + ":" + CLIENT_SECRET))),
      "Content-Type": 'application/x-www-form-urlencoded'
    }
  });

  const params = {
    grant_type: 'authorization_code',
    code: code,
    redirect_uri: process.env.LOGIN_URL,
  };
  const searchParams = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key]);
  }).join('&');

  tokenRequest.post('/uaa/oauth/token', searchParams).then(response => {
    let token = response.data;
    setTokens(token.access_token, token.refresh_token);

    //TODO: move
    securedGet(process.env.API_URL + '/resource/').then(response => {
      console.log(response.data);
    });
    history.push(getTargetUrl());

  }).catch(error => {
    if (error) {
      redirectToAuthService();
    }
  });
};

export const redirectToAuthService = () => {
  window.location.href = process.env.AUTH_SERVER_URL + '/uaa/oauth/authorize?client_id=' + CLIENT_ID + '&redirect_uri=' + process.env.LOGIN_URL + '&response_type=code&scope=resource-read';
};
export const rememberTargetUrl = (url) => {
  localStorage.targetUrl = url.pathname;
};
export const getTargetUrl = () => {
  return localStorage.targetUrl;
};
export const authenticate = (url) => {
  rememberTargetUrl(url);
  redirectToAuthService();
};

export const logout = () => {
  //tODO: location from parameters
  removeTokens();
  window.location.href = "/";
};

// export const refreshToken = refresh_token =>
//   xhr.request(() => createTokenRefreshUrl(refresh_token))
//     .then(
//       success => {
//         setAccessToken(success.data.access_token);
//         setRefreshToken(success.data.refresh_token);
//         console.debug("refresh token success", success.data.access_token);
//         return Promise.resolve(success.data.access_token);
//       },
//       error => {
//         console.error("refresh token error", error);
//
//         switch (error.type) {
//           case ERROR_HTTP:
//             if (error.code === 401) {
//               return Promise.reject(Error.auth(true, error.message));
//             } else {
//               return Promise.reject(Error.auth(false, error.message));
//             }
//           default:
//             return Promise.reject(Error.auth(false, error.message));
//         }
//       }
//     );
//
// export const createTokenRefreshUrl = () =>
//   URI("/oauth/token")
//     .query({
//       grant_type: "refresh_token",
//       client_id: CLIENT_ID,
//       client_secret: CLIENT_SECRET,
//       refresh_token: getRefreshToken()
//     }).toString();
//
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN);

export const setAccessToken = access_token => {
  localStorage.setItem(ACCESS_TOKEN, access_token);
};

export const setRefreshToken = refresh_token => {
  localStorage.setItem(REFRESH_TOKEN, refresh_token);
};

export const setTokens = (access_token, refersh_token) => {
  setAccessToken(access_token);
  setRefreshToken(refersh_token);
};

export const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};

export const removeRefreshToken = () => {
  localStorage.removeItem(REFRESH_TOKEN);
};

export const removeTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};

export const isAccessTokenExpired = token => isTokenExpired(token);

export const isRefreshTokenExpired = token => isTokenExpired(token);

export const isTokenExpired = token => {
  if (!token) {
    return true;
  }
  try {
    const {exp} = jwtDecode(token);
    // exp in seconds
    // token is expired if lifetime smaller then connection timeout
    return (exp * 1000 - Date.now()) < TIMEOUT;
  } catch (e) {
    return true;
  }
};

export const validateToken = () => {
  return new Promise((resolve, reject) => {
    const access_token = getAccessToken();
    if (!access_token) {
      reject(Error.auth(true, "No access token"));
      return;
    }

    const refresh_token = getRefreshToken();
    if (!refresh_token) {
      reject(Error.auth(true, "No refresh token"));
      return;
    }

    if (isAccessTokenExpired(access_token) &&
      !isRefreshTokenExpired(refresh_token)) {
//TODO: backoff?
      // backoff(
      //   () => refreshToken(refresh_token),
      //   {
      //     attempts: 8,
      //     minDelay: 1000,
      //     maxDelay: 10000
      //   }
      // ).then(
      //   success => resolve(success),
      //   error => reject(error)
      // );
    } else if (
      isAccessTokenExpired(access_token) &&
      isRefreshTokenExpired(refresh_token)) {
      reject(Error.auth(true, "All tokens expired"));
    } else {
      resolve(access_token);
    }
  });
};
