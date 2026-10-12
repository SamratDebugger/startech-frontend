import Dock from "./Dock";
import Footer from "./Footer";
import NavTop from "./NavTop";

export default function Drawer({ children }) {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content relative flex flex-col">
        {/* Navbar */}
        <NavTop />
        {/* Page content here */}
        <main className="bg-base-300"> {children} </main>
        <Footer />
        <section className="lg:hidden sticky bottom-0">
          <Dock />
        </section>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
