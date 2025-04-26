export interface MenuItemOptions {
  title: string;
  icon: string;
  route: string;
  isActive: boolean;
}

export class MenuItem {
  public title: string;
  public icon: string;
  public route: string;
  public isActive: boolean;

  constructor(options: MenuItemOptions) {
    this.title = options.title;
    this.icon = options.icon;
    this.route = options.route;
    this.isActive = options.isActive;
  }

  public toggleActive() {
    this.isActive = !this.isActive;
  }
}

export const menuItems: MenuItem[] = [
  new MenuItem({
    title: 'Acasǎ',
    icon: 'house',
    route: '/',
    isActive: false,
  }),
  new MenuItem({
    title: "Meniu",
    icon: "book-open",
    route: "/menu",
    isActive: false,
  }),
  new MenuItem({
    title: "Contact",
    icon: "map-location-dot",
    route: "/contact",
    isActive: false,
  })
];
