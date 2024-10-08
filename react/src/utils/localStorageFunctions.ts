import { LogInUserDataType } from "../types";

const defaultIdentifier = 'userData';

const getStorageItem = (identifier = defaultIdentifier) => localStorage.getItem(identifier);

const setStorageItem = (data: LogInUserDataType, identifier = defaultIdentifier) => (
  localStorage.setItem(identifier, JSON.stringify(data)));

const removeStorageItem = (identifier = defaultIdentifier) => (
  localStorage.removeItem(identifier));

export { getStorageItem, setStorageItem, removeStorageItem };
