import Dock from "./Dock";
import Footer from "./Footer";
import NavBottom from "./NavBottom";
import NavSidebar from "./NavSidebar";
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
        <div className="max-lg:hidden sticky top-0 z-50">
          <NavBottom />
        </div>

        {/* Page content here */}
        <main data-theme="light" className="bg-base-300">
          {children}
        </main>
        <Footer />
        <section className="lg:hidden sticky z-50 bottom-0">
          <Dock />
        </section>
      </div>
      <div className="drawer-side z-60">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <NavSidebar />
        </ul>
      </div>
    </div>
  );
}
