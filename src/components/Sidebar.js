import Image from "next/image";

import Link from "next/link";
import { useContext } from "react";
import {
  IconLeft, 
  IconRight,
  IconHome, 
  IconUserGroup, 
  IconStorage, 
  IconPen, 
  IconFile, 
  IconQuestionCircle
}
  from "@arco-design/web-react/icon"

import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Trang chủ",
    href: "/",
    icon: IconHome,
  },
  {
    name: "Đánh giá",
    href: "/evaluate",
    icon: IconStorage,
  },
  {
    name: "Quyết định",
    href: "/decision",
    icon: IconPen,
  },
  {
    name: "Báo cáo",
    href: "/report",
    icon: IconFile,
  },
  {
    name: "Help & FAQ",
    href: "/help",
    icon: IconQuestionCircle,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <IconRight /> : <IconLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon style={{ fontSize: 24, marginRight: 20 }} />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
                { (href == "/employee" || href == "/report") && <div className="sidebar-line"></div>}
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
