type NavBarProps = {
  title: string;
  navItems: NavItem[];
};

type NavItemProps = {
  item: NavItem;
};

interface NavItem {
  text: string;
}
