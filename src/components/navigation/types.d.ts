type NavBarProps = {
  title: string;
  className: string;
  titleStyle: string;
  navItemsStyle: string;
  navItems: NavItem[];
};

type NavItemProps = {
  item: NavItem;
};

interface NavItem {
  text: string;
}
