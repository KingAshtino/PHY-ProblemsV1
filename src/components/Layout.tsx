import { NavLink, Outlet, useLocation } from "react-router-dom";

export function Layout() {
  const { pathname } = useLocation();
  const collectionOn =
    pathname === "/collection" ||
    pathname.startsWith("/browse") ||
    pathname.startsWith("/major") ||
    pathname.startsWith("/problem");

  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/possible" className="brand">
          Physics I
        </NavLink>
        <nav>
          <details className={collectionOn ? "nav-drop on" : "nav-drop"}>
            <summary>Collection</summary>
            <div className="nav-drop-menu">
              <NavLink to="/collection">About A–C and Major</NavLink>
              <NavLink to="/browse" end>
                Browse problems
              </NavLink>
              <NavLink to="/major">Major Collaborative Problems</NavLink>
            </div>
          </details>
          <NavLink to="/proposal">Proposal Problems</NavLink>
          <NavLink to="/possible">Possible or Impossible</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="site-foot">
        Introductory mechanics. The current task is classifying situations as physically possible
        or impossible. Older A–C, major, and proposal materials remain under Collection and
        Proposal Problems.
      </footer>
    </div>
  );
}
