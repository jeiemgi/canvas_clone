import React from "react";
import { Link } from "@remix-run/react";

function ErrorBoundary({ error }: { error: Error | unknown }) {
  // TODO: Handle different error responses.
  return (
    <div
      className={
        "bg-texture-404 texture-404-background flex h-screen items-center bg-pure-black text-white"
      }
    >
      <div className={"absolute left-0 right-0 mx-auto max-w-[50%]"}>
        <img
          className={"w-full object-contain"}
          src="/images/404-spraypaint.png"
          alt=" "
        />
        <img
          className={"absolute bottom-12 right-14 object-contain"}
          src="/images/404-lettering.png"
          alt=" "
        />
      </div>
      <div className="max-container w-full">
        <hr className={"w-full border-white/30"} />
        <div className="grid-container">
          <div className={"col-start-3 mt-2"}>
            <Link className={"label--2"} to={"/"}>
              ( Home )
            </Link>
          </div>

          <div className={"label--2 col-start-6 mt-2"}>
            sorry —<br />
            404
          </div>
          <div className={"label--2 col-start-7 mt-2"}>
            something went wrong
          </div>
          <button
            className={"label--2 col-start-10 mt-2"}
            onClick={() => window.location.reload()}
          >
            ( Refresh )
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
