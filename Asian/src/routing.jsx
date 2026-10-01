import { createContext, useContext, useEffect, useState } from "react";

const RouterContext = createContext(null);

export function Router({ children }) {
  const [path, setPath] = useState(() => window.location.pathname || "/");
  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  const navigate = (to) => {
    if (to === window.location.pathname) return;
    window.history.pushState({}, "", to);
    setPath(to);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return <RouterContext.Provider value={{ path, navigate }}>{children}</RouterContext.Provider>;
}

export function useRouter() { return useContext(RouterContext); }

export function Link({ to, children, onClick, ...props }) {
  const { navigate } = useRouter();
  return <a href={to} {...props} onClick={(e) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onClick?.(e);
    navigate(to);
  }}>{children}</a>;
}

export function RouteView({ routes, notFound: NotFound }) {
  const { path } = useRouter();
  const Component = routes[path];
  return Component ? <Component /> : <NotFound />;
}
