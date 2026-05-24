"use client";

import { menuItems } from "@/app/admin/_components/sidebar";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar } from "./avatar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex w-full min-h-15 px-4 justify-between items-center border-b-2">
      <Image
        src="/next.svg"
        alt="Logo"
        width={50}
        height={50}
        loading="eager"
        style={{ width: 50, height: "auto" }}
      />
      <Menubar>
        {menuItems.map((item, index) => {
          return item.children ? (
            <MenubarMenu key={index}>
              <MenubarTrigger>{item.itemsName}</MenubarTrigger>
              <MenubarContent>
                {item.children.map((subItem, subIndex) => {
                  return (
                    <MenubarGroup key={subIndex}>
                      <MenubarItem>{subItem.itemsName}</MenubarItem>
                    </MenubarGroup>
                  );
                })}
              </MenubarContent>
            </MenubarMenu>
          ) : (
            <MenubarMenu key={index}>
              <MenubarTrigger>{item.itemsName}</MenubarTrigger>
            </MenubarMenu>
          );
        })}
      </Menubar>
      <Avatar />
    </div>
  );
};
export default Header;
