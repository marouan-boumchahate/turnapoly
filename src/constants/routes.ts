import { AppRoute } from '../types/route';

export interface RouteNavItem {
  route: AppRoute;
  label: string;
}

export const ROUTE_NAV_ITEMS: RouteNavItem[] = [
  { route: 'home', label: 'Home' },
  { route: 'rules', label: 'Rules' },
  { route: 'records', label: 'Records' },
];
