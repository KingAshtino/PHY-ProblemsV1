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
          <NavLink to="/browse" end>
            Browse problems
          </NavLink>
          <NavLink to="/major">Major Collaborative Problems</NavLink>
          <NavLink to="/proposal">Proposal Problems</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-foot">
        Original problems for an introductory mechanics course. Category C, Major Collaborative
        Problems, and Proposal Problems are the point of the collection.
      </footer>
    </div>
  );
}
