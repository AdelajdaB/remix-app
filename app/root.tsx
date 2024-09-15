import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Link } from 'react-router-dom';

import "./tailwind.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

function Navigation() {
  return(
    <>
      <nav className="px-10 pt-5">
        <Link to="/" className="text-2xl font-semibold">
          Move <span className="text-teal-500">DB</span>
        </Link>
      </nav>
    </>
  )
}