import { Link } from "react-router";
import BreadCrums from "../components/BreadCrums";

export default function NotFound() {
  return (
    <>
      <div data-theme="light">
        <section className="max-w-360 mx-auto px-5">
          <BreadCrums />
        </section>
        <section className="max-w-360 mx-auto text-center">
          <img
            className="max-w-100 mx-auto "
            src="/assets/images/not-found.svg"
            alt="Not-Found"
          />
          <div>
            <h3>Oops!</h3>
            <p>The page you requested cannot be found.</p>
            <Link to="/">
              <button className="btn btn-info">Continue</button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
