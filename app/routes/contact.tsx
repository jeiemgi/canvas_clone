import ContactForm from "~/slices/Contact/ContactForm";
import React from "react";
import { LinkCTA } from "~/components/CTA";

const ContactPage = () => {
  return (
    <div
      className={
        "noise-background flex h-screen items-start bg-pure-black pt-header text-white md:items-center md:pt-0"
      }
    >
      <div className="grid-container w-full pb-24">
        <div className="col-span-4 mb-12 border-t border-t-white/30 md:order-1 md:col-start-1 md:mb-0 md:border-0">
          <h1 className={"heading--2 py-6 md:mb-20 md:py-0"}>Let’s chat</h1>
        </div>

        <div
          className={
            "col-span-4 md:order-2 md:col-span-6 md:col-start-7 md:mb-20"
          }
        >
          <p>
            Send us your ideas and lets collaborate on something cool together.
          </p>
        </div>

        <div className="col-span-4 mb-14 md:order-3 md:col-span-6 md:col-start-7 md:mb-0">
          <ContactForm />
        </div>

        <div className={"col-span-4 md:order-2 md:col-start-1"}>
          <div className={"mb-7"}>
            <p>new business</p>
            <a href="mailto:biz@canvascreative.co">biz@canvascreative.co</a>
          </div>
          <div className={"mb-7"}>
            <p>careers</p>
            <a href="mailto:careers@canvascreative.co">
              careers@canvascreative.co
            </a>
          </div>
          <div className={"mb-14"}>
            <p>general</p>
            <a href="mailto:info@canvascreative.co">info@canvascreative.co</a>
          </div>

          <div className={"flex gap-4"}>
            <LinkCTA to="https://www.instagram.com">Instagram</LinkCTA>
            <LinkCTA to="#https://www.linkedin.com">LinkedIn</LinkCTA>
            <LinkCTA to="https://www.twitter.com">Twitter</LinkCTA>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
