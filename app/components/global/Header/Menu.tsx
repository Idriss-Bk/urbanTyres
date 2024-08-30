// import Link from 'next/link'
// import React from 'react'

// const Menu = () => {
//   return (
//     <nav className='hidden md:block'>
//        <ul className='flex justify-center items-center gap-5'>
//           <li>
//             <Link href="/" className='text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold'>Tyre Pressure</Link>
//           </li>
//           <li>
//             <Link href="/" className='text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold'>Tyre Sizes</Link>
//           </li>
//           <li>
//             <Link href="/" className='text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold'>Bike Tyres</Link>
//           </li>
//           <li>
//             <Link href="/" className='text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold'>About Us</Link>
//           </li>
//           <li>
//             <Link href="/" className='text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold'>Contact Us</Link>
//           </li>
//         </ul> 
//     </nav>
//   )
// }

// export default Menu

import React from "react";
import Link from "next/link";
import { getMenuByName, MenuItem } from "@/services/menu";

const hasChildItems = (
  item: MenuItem
): item is MenuItem & { childItems: { nodes: MenuItem[] } } => {
  return !!item.childItems && item.childItems.nodes.length > 0;
};

const cleanCategoryPath = (path: string): string => {
  if (path.startsWith("/category/")) {
    return "/" + path.split("/").slice(2).join("/");
  }
  return path;
};

const MenuItemComponent = ({ item }: { item: MenuItem }) => {
  const rawHref =
    item.path ||
    item.url ||
    item.uri ||
    `/${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  const href = cleanCategoryPath(rawHref);

  if (hasChildItems(item)) {
    return (
      <li className="relative group">
        <Link
          href={href}
          className={`text-gray-800 hover:text-orange-600 transition-all duration-400 font-semibold`}
        >
          {item.label}
        </Link>
        <ul
          className={`absolute left-0 p-2 py-3 pb-2 px-0 mt-2 min-w-max bg-[#${process.env.NEXT_PUBLIC_PRIMARY_COLOR}] rounded shadow-lg hidden group-hover:block`}
        >
          {item.childItems.nodes.map((childItem) => {
            const rawChildHref =
              childItem.path ||
              childItem.url ||
              childItem.uri ||
              `/${childItem.label.toLowerCase().replace(/\s+/g, "-")}`;
            const childHref = cleanCategoryPath(rawChildHref);
            return (
              <li key={childItem.id} className="px-4 py-1">
                <Link
                  href={childHref}
                  className={`block text-md text-slate-800 hover:text-[#${process.env.NEXT_PUBLIC_TERTIARY_COLOR}] capitalize font-semibold`}
                >
                  {childItem.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }

  return (
    <li className="">
      <Link
        href={href}
        className={`text-gray-800 hover:text-orange-600 transition-all uppercase duration-400 font-bold text-sm`}
      >{item.label}</Link>
    </li>
  );
};

export default async function Menu() {
  const menuItems = await getMenuByName("Primary");

  if (!menuItems) {
    return <div>Menu not found</div>;
  }

  if (typeof menuItems === "string") {
    return <div>{menuItems}</div>;
  }

  // Filter top-level items (items without a parent)
  const topLevelItems = menuItems.filter((item) => !item.parentId);

  return (
    <div className="hidden lg:block">
      <ul className="flex justify-center items-center gap-5">
        {topLevelItems.map((item: any) => (
          <MenuItemComponent key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
