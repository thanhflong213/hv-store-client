"use client";

import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  Sidebar as SidebarUI,
} from "@/components/ui/sidebar";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  LayoutDashboard,
  LogOut,
  UserRound,
  Barcode,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface MenuItem {
  itemsName: string;
  icon: React.ReactNode;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    itemsName: "Dashboard",
    icon: <LayoutDashboard />,
    href: "/dashboard",
  },
  {
    itemsName: "Product",
    icon: <Barcode />,
    href: "/product",
    children: [
      {
        itemsName: "All Products",
        icon: <Barcode />,
        href: "/product/all",
      },
      {
        itemsName: "Add Product",
        icon: <Barcode />,
        href: "/product/add",
      },
    ],
  },
  {
    itemsName: "Account",
    icon: <UserRound />,
    href: "/account",
  },
  {
    itemsName: "Group 1",
    icon: <LayoutDashboard />,
    href: "/group1",
    children: [
      {
        itemsName: "Sub Item 1",
        icon: <Barcode />,
        href: "/group1/subitem1",
      },
      {
        itemsName: "Sub Item 2",
        icon: <UserRound />,
        href: "/group1/subitem2",
      },
    ],
  },
];

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  return (
    <SidebarUI className={className}>
      <SidebarHeader className="items-center justify-center h-15 border-b-2">
        <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={100}
          loading="eager"
          style={{ width: 100, height: "auto" }}
        />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) =>
                item.children ? (
                  <Collapsible
                    key={index}
                    asChild
                    defaultOpen={false}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.itemsName}>
                          {item.icon}
                          <span>{item.itemsName}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((child, childIndex) => (
                            <SidebarMenuSubItem key={childIndex}>
                              <SidebarMenuSubButton asChild>
                                <Link href={child.href}>
                                  {child.icon}
                                  <span>{child.itemsName}</span>
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={index}>
                    <SidebarMenuButton asChild tooltip={item.itemsName}>
                      <Link href={item.href}>
                        {item.icon}
                        <span>{item.itemsName}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button variant="ghost" className="w-full justify-start">
                <LogOut />
                <span>Logout</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </SidebarUI>
  );
};

export default Sidebar;
