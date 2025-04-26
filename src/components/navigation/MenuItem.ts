export interface MenuItemOptions {
  title: string;
  icon: string;
  iconType: string;
  route: string;
  isActive: boolean;
}

export class MenuItem {
  public title: string;
  public icon: string;
  public iconType: string;
  public route: string;
  public isActive: boolean;

  constructor(options: MenuItemOptions) {
    this.title = options.title;
    this.icon = options.icon;
    this.iconType = options.iconType;
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
    iconType: 'fas',
    route: 'home',
    isActive: false,
  }),
  new MenuItem({
    title: "Meniu",
    icon: "book-open",
    iconType: "fas",
    route: "menu",
    isActive: false,
  }),
  new MenuItem({
    title: "Contact",
    icon: "map-location-dot",
    iconType: "fas",
    route: "contact",
    isActive: false,
  })
];
