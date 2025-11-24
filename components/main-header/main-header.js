import Link from "next/link";
import Image from "next/image";

import LogoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background";
export default function MainHeader() {
    return (
        <header className={classes.header}>
            <MainHeaderBackground />
                <Link href='/' className={classes.logo}>
                    <Image src={LogoImg} alt="A plate with food" priority/>
                    Next Level Food
                </Link>
                <nav className={classes.nav}>
                    <ul>
                        <li>
                            <Link href='/meals'>Meals</Link>
                        </li>
                        <li>
                            <Link href='/community'>Community</Link>
                        </li>
                    </ul>
                </nav>
        </header>
    )
}