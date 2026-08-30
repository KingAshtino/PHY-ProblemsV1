import { NavLink, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          Physics I
        </NavLink>
        <nav>
          <NavLink to="/" end>
            About the collection
          </NavLink>
          <NavLink to="/browse">Browse problems</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-foot">
        Original problems for an introductory mechanics course. Category C is the point of the collection.
      </footer>
    </div>
  );
}
