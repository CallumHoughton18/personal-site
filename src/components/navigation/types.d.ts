type NavBarProps = {
  title: string;
  className: string;
  navItems: NavItem[];
};

type NavItemProps = {
  item: NavItem;
};

interface NavItem {
  text: string;
}
