interface Props {
  title: string;
  description: string;
  image: string;
}

function HomePagePortfolioMobile({ title, description, image }: Props) {
  return (
    <div
      className={
        "noise-background mobile-only bg-black pb-8 pt-[6.5rem] text-white"
      }
    >
      <div className="max-container">
        <h2 className={"heading--2 mb-7 border-t border-t-white/30 pt-2.5"}>
          {title}
        </h2>

        <div className={"mb-7"}>
          <img src={image} alt="sample" />
        </div>

        <p className={"body--3 whitespace-break-spaces	"}>{description}</p>
      </div>
    </div>
  );
}

export default HomePagePortfolioMobile;
