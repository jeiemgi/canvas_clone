import clsx from "clsx";
import { validator } from "~/routes/contact";
import { useFetcher } from "@remix-run/react";
import ContactForm from "~/slices/Contact/ContactForm";
import { LinkCTA } from "~/components/CTA";
import { INSTAGRAM_URL, LINKEDIN_URL, TWITTER_URL } from "~/lib/constants";

const ContactPage = () => {
  const fetcher = useFetcher();

  return (
    <div
      className={
        "noise-background flex min-h-screen items-start bg-pure-black pt-header text-white md:items-center md:pt-headerDesk"
      }
    >
      <div className="grid-container w-full pb-24 pt-24">
        <div className="col-span-4 mb-5 border-t border-t-white/30 md:col-span-12"></div>

        <div className="col-span-4 mb-12 md:order-1 md:col-start-1 md:mb-0">
          <h1 className={"heading--2 py-6 md:mb-20 md:py-0"}>Let’s chat</h1>
        </div>

        <div
          className={
            "col-span-4 md:order-2 md:col-span-6 md:col-start-7 md:mb-20"
          }
        >
          <div className={"relative overflow-hidden"}>
            <div
              className={clsx(
                "absolute inset-0 transition delay-75 duration-300",
                fetcher.data?.ok || false
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[1rem] opacity-0"
              )}
            >
              <p className={"body--1"}>
                Your message has been sent, thank you! <br />
                Someone from our team will be reaching out to you shortly.
              </p>
            </div>

            <div
              className={clsx(
                "transition-transform duration-300",
                !fetcher.data ? "translate-y-0" : "-translate-y-full"
              )}
            >
              <p className={"body--1"}>
                We’re curious to learn about your company and how we could help.
                Fill out the form below or if you would prefer to email us hit
                us up at{" "}
                <span className="relative inline-block">
                  <LinkCTA
                    className={"relative"}
                    to="mailto:biz@canvascreative.co"
                  >
                    biz@canvascreative.co
                  </LinkCTA>
                  <div
                    className={
                      "absolute bottom-0 left-0  h-[1px] w-full w-full bg-white/30"
                    }
                  ></div>
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-4 mb-14 md:order-3 md:col-span-6 md:col-start-7 md:mb-0">
          <ContactForm fetcher={fetcher} validator={validator} />
        </div>

        <div className={"col-span-4 md:order-2 md:col-start-1"}>
          <div className={"mb-7"}>
            <p className={"label--2"}>new business</p>
            <LinkCTA className={"body--3"} to="mailto:biz@canvascreative.co">
              biz@canvascreative.co
            </LinkCTA>
          </div>
          <div className={"mb-7"}>
            <p className={"label--2"}>careers</p>
            <LinkCTA
              className={"body--3"}
              to="mailto:careers@canvascreative.co"
            >
              careers@canvascreative.co
            </LinkCTA>
          </div>
          <div className={"mb-14"}>
            <p className={"label--2"}>general</p>
            <LinkCTA className={"body--3"} to="mailto:info@canvascreative.co">
              info@canvascreative.co
            </LinkCTA>
          </div>

          <div className={"flex gap-4 md:absolute md:bottom-0 md:pb-8"}>
            <LinkCTA className={"body--3"} target={"_blank"} to={INSTAGRAM_URL}>
              Instagram
            </LinkCTA>
            <LinkCTA className={"body--3"} target={"_blank"} to={LINKEDIN_URL}>
              LinkedIn
            </LinkCTA>
            <LinkCTA className={"body--3"} target={"_blank"} to={TWITTER_URL}>
              Twitter
            </LinkCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
