import createWebStorage from "redux-persist/lib/storage/createWebStorage";

export const links = [
    { href: "/", label: "Home" },
    { href: "/desktop", label: "Desktop PCs" },
    { href: "/laptop", label: "Laptops" },
    { href: "/contact", label: "Contact" },
];

export const isClient = typeof window !== "undefined";


const createNoopStorage = () => {
  return {
    getItem(_key) {
      return Promise.resolve(null);
    },
    setItem(_key, value) {
      return Promise.resolve(value);
    },
    removeItem(_key) {
      return Promise.resolve();
    },
  };
};

const storage = isClient ? createWebStorage("local") : createNoopStorage();

export default storage;