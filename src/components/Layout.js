import { Outlet, Link } from "react-router-dom";

export function Layout() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/timer">Таймер</Link>
                <Link to="/palette">Палитра</Link>
            </nav>
            <hr />
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}