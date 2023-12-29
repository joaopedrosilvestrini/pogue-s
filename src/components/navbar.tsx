'use client'

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"


export default function NavbarZ() {
    return (
        <>
            <header className="group sticky top-0 z-10 w-full max-h-screen hidden sm:flex">
                <Navbar>
                    <NavbarBrand>
                        <p className="font-black text-5xl">P</p>
                    </NavbarBrand>
                    <NavbarContent justify="center">
                        <NavbarItem>
                            <Button variant="light" radius="sm" disableRipple>Home</Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button variant="light" radius="sm" disableRipple>Sobre</Button>
                        </NavbarItem>
                        <NavbarItem>
                            <Button variant="light" radius="sm" disableRipple>Time</Button>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify="end">
                        <Button radius="sm" disableRipple>Entrar</Button>
                    </NavbarContent>
                </Navbar>
            </header>   
        </>
    )
}