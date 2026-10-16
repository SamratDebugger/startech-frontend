import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-360 mx-auto p-5">
      <div className="lg:col-span-9">
        <HeroSlider />
      </div>
      <div className="grid gap-5 items-center lg:col-span-3 max-lg:grid-cols-2  ">
        <img
          className="w-full rounded-xl  "
          src="/assets/images/review.webp"
          alt="Review"
        />
        <img
          className="w-full rounded-xl "
          src="/assets/images/apply.webp"
          alt="Apply"
        />
      </div>
    </div>
  );
}
