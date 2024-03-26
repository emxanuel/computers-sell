import {
    Navbar as Nav,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
} from "@nextui-org/react";
import { links } from "@/utils";
import Link from "next/link";
import styles from "./styles.module.scss";

export default function Navbar() {
    return (
        <Nav shouldHideOnScroll className={styles.container}>
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
                                fill="#000000"
                                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                            />
                        </svg>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/login">Login</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {links.map((link) => (
                    <NavbarMenuItem key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                    </NavbarMenuItem>
                ))}
                <NavbarMenuItem>
                    <Link href="/cart" className="flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#000000"
                                d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z"
                            />
                        </svg>
                        Shopping Cart
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link href="/login">Login</Link>
                </NavbarMenuItem>
            </NavbarMenu>
            <NavbarMenuToggle className="sm:hidden" />
        </Nav>
    );
}
