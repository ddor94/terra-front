import { makeVar } from "@apollo/client";
import { getItemFromStore, setItemToStore } from './localStorage';

export const tokenKey = "utk";
export const isAuthenticated = getItemFromStore(tokenKey) ? true : false;
export const token = getItemFromStore(tokenKey);

export const setToken = (newToken) => {
  setItemToStore(tokenKey, newToken);
};

export const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

export const currentUser = makeVar([]);
