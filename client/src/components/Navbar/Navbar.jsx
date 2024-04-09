"use client";
import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { isClient, links } from "@/utils";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "@/redux/features/auth/authSlice";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();
    const user = useSelector(selectUser);
    const inDashboard = pathname.includes("dashboard");
    const [menuOpen, setMenuOpen] = useState(false);
    const [logInOut, setLogInOut] = useState({
        label: "Login",
        href: "/login",
    });
    const handleClickMenu = () => setMenuOpen(!menuOpen);
    const dispatch = useDispatch();
    useEffect(() => {
        if (user.id !== undefined) {
            setLogInOut({ label: "Logout", href: "/logout" });
        }
    }, [user]);
    return (
        !inDashboard && (
            <Nav shouldHideOnScroll className={styles.container} isMenuOpen={menuOpen}>
                <NavbarBrand className={styles.logo}>
                    <Link href="/">Emm's Computers</Link>
                </NavbarBrand>
                <NavbarContent className={`hidden sm:flex ${styles.links}`}>
                    {links.map((link) => (
                        <NavbarItem key={link.href}>
                            <Link href={link.href}>{link.label}</Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
                <NavbarContent className={`${styles.actions}`}>
                    <NavbarItem>
                        <Link href="/cart">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                                />
                            </svg>
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href={"/search"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                                />
                            </svg>
                        </Link>
                    </NavbarItem>
                    {user.role === 'admin' && <NavbarItem>
                        <Link href={"/dashboard"}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12M4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
                                />
                                <circle
                                    cx="12"
                                    cy="8.5"
                                    r="2.5"
                                    fill="currentColor"
                                />
                                <path
                                    fill="currentColor"
                                    d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3"
                                />
                            </svg>
                        </Link>
                    </NavbarItem>}
                    <NavbarItem>
                        <Link href={logInOut.href}>{logInOut.label}</Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu>
                    {links.map((link) => (
                        <NavbarMenuItem key={link.href}>
                            <Link href={link.href} onClick={handleClickMenu}>{link.labelMobile}</Link>
                        </NavbarMenuItem>
                    ))}
                    <NavbarMenuItem>
                        <Link
                            href={"/search"}
                            className="flex items-center gap-2"
                            onClick={handleClickMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                                />
                            </svg>
                            Search
                        </Link>
                    </NavbarMenuItem>
                    <NavbarMenuItem>
                        <Link href="/cart" className="flex items-center gap-2" onClick={handleClickMenu}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                                />
                            </svg>
                            Shopping Cart
                        </Link>
                    </NavbarMenuItem>
                    {user.role === "admin" && <NavbarMenuItem>
                        <Link
                            href={"/dashboard"}
                            className="flex items-center gap-2"
                            onClick={handleClickMenu}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 23C6.443 21.765 2 16.522 2 11V5l10-4l10 4v6c0 5.524-4.443 10.765-10 12M4 6v5a10.58 10.58 0 0 0 8 10a10.58 10.58 0 0 0 8-10V6l-8-3Z"
                                />
                                <circle
                                    cx="12"
                                    cy="8.5"
                                    r="2.5"
                                    fill="currentColor"
                                />
                                <path
                                    fill="currentColor"
                                    d="M7 15a5.782 5.782 0 0 0 5 3a5.782 5.782 0 0 0 5-3c-.025-1.896-3.342-3-5-3c-1.667 0-4.975 1.104-5 3"
                                />
                            </svg>
                            Dashboard
                        </Link>
                    </NavbarMenuItem>}
                    <NavbarMenuItem>
                        <Link onClick={handleClickMenu} href={logInOut.href}>{logInOut.label}</Link>
                    </NavbarMenuItem>
                </NavbarMenu>
                <NavbarMenuToggle className="sm:hidden" onClick={handleClickMenu}/>
            </Nav>
        )
    );
}
