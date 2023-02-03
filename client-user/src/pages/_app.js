import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/app/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    </>
  );
}
