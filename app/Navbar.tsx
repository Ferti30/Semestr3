"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export default function Heading() {
    return (
        <NavigationMenu>
            <NavigationMenuItem>
                <Link href="./" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Glowna
                    </NavigationMenuLink>
                </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/2" legacyBehavior passHref>2</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/3" legacyBehavior passHref>3</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <Link href="/4" legacyBehavior passHref>4</Link>
            </NavigationMenuItem>
        </NavigationMenu>
    )
}
