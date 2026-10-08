export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
  icon?: unknown;
}

export const NAVIGATION_CONFIG = [
  { key: "release", path: "/release", isContentType: true },
  { key: "guide", path: "/guide", isContentType: true },
  { key: "classes", path: "/classes", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "community", path: "/community", isContentType: true },
] as const satisfies readonly NavigationItem[];

export const CONTENT_TYPES: string[] = NAVIGATION_CONFIG
  .filter((item) => item.isContentType)
  .map((item) => item.path.replace(/^\//, ""));
