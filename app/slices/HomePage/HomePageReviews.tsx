import React from "react";
import TextBlur from "~/components/TextBlur";

function HomePageReviews() {
  return (
    <div className={"h-screen w-full select-none bg-royal-blue"}>
      <div className={"grid-container relative"}>
        <div className="col-span-3">
          <TextBlur black>5 STARS</TextBlur>
        </div>
        <div className="col-span-3 col-start-9">
          <TextBlur black>REVIEWS</TextBlur>
        </div>

        <div className="col-span-3 col-start-4">
          <TextBlur black>REVIEWS</TextBlur>
        </div>

        <div className="col-span-3 col-start-8">
          <TextBlur black>CONQUER</TextBlur>
        </div>

        <div className="col-span-5 col-start-6">
          <TextBlur black>5 STARS CONQUER</TextBlur>
        </div>

        <div className="col-span-1 col-start-12">
          <TextBlur verticalRight black>
            CONQUER
          </TextBlur>
          <TextBlur verticalRight black>
            ROAM
          </TextBlur>
        </div>
        <div className="absolute bottom-0 col-span-1 col-start-1">
          <TextBlur verticalLeft black>
            LEXINGTON
          </TextBlur>
        </div>
      </div>
    </div>
  );
}

export default HomePageReviews;
