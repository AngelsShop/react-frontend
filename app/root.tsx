import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import "./style.css";
import { ModalAuthorizationProvider } from "./context/modalAuthorization";
import { UserInfoProvider } from "./context/userInfo";
import { Bounce, ToastContainer } from "react-toastify";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-lvh flex flex-col">
        <ModalAuthorizationProvider>
          <UserInfoProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </UserInfoProvider>
        </ModalAuthorizationProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
          transition={Bounce}
        />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
