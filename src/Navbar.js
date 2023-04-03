import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar(){
    
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Site name</Link>
            <ul>
                <CustomLink to="/One">useState</CustomLink>
                <CustomLink to="/Two">useReducer</CustomLink>
                <CustomLink to="/Effect">useEffect</CustomLink>
                <CustomLink to="/RufHooks">useRef</CustomLink>
                <CustomLink to="/LayoutEffect">useLayoutEffect</CustomLink>
                <CustomLink to="/ImperativeHandle">useImperativeHandle</CustomLink>
                <CustomLink to="/Contaxt">useContaxt</CustomLink>
            </ul>
        </nav>
    );
}
function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}