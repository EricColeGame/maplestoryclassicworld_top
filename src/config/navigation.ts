export interface NavigationItem {
  key: string;
  path: string;
  isContentType: boolean;
  icon?: unknown;
}

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
