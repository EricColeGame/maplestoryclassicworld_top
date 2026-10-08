export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    forums?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "MapleStory Classic World Wiki",
  shortName: "MapleStory Classic World",
  logoText: "M",
  tagline: "Classic Pre-Big Bang MMORPG Guides & Database",
  description: "MapleStory Classic World Wiki with class guides, maps, quests, skills, monsters, leveling tips, party quests, release news and classic gameplay information.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://maplestoryclassicworld.top",
  supportEmail: "support@maplestoryclassicworld.top",
  gameUrl: "https://maplestory.nexon.net/",
  heroVideoId: "q_e8qM8seJA", // IGN Live 2026 Special Trailer | Global MapleStory Classic World
  social: {
    discord: "https://discord.com/servers/maplestory-classic-world-1408190604889948300",
    youtube: "https://www.youtube.com/@MapleStory",
    forums: "https://forums.maplestory.nexon.net/",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
