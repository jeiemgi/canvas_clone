import React from "react";
import { Link } from "@remix-run/react";

function ErrorBoundary({ error }: { error: Error | unknown }) {
  console.log("ErrorBoundary", error);

  // TODO: Handle different error responses.
  return (
    <div
      className={
        "texture-404-background flex h-screen flex-col items-center bg-pure-black pt-header text-white md:flex-row md:pt-0"
      }
    >
      <div className={"w-full pt-[80px]"}>
        <div className={"max-container"}>
          <hr className={"w-full border-white/30"} />
        </div>

        <div className="grid-container flex justify-between md:grid">
          <div className={"desktop-only mt-2 md:col-start-3"}>
            <Link className={"label--2 whitespace-nowrap"} to={"/"}>
              ( Home )
            </Link>
          </div>

          <div className={"label--2 mt-2 md:col-start-6"}>
            Sorry –<br />
            404
          </div>
          <div className={"label--2 mt-2 text-right md:col-start-7"}>
            something <br className={"mobile-only"} /> went wrong
          </div>
          <button
            className={
              "label--2 desktop-only mt-2 whitespace-nowrap md:col-start-10"
            }
            onClick={() => window.location.reload()}
          >
            ( Refresh )
          </button>
        </div>
      </div>

      <div className={"left-0 right-0 mx-auto md:absolute md:max-w-[50%]"}>
        <img
          className={"w-full object-contain"}
          src="/images/404.png"
          alt=" "
        />
      </div>
    </div>
  );
}

export default ErrorBoundary;
