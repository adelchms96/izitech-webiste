export const GOOGLE_PLAY_DEV =
  "https://play.google.com/store/apps/dev?id=5065874752111128143";

export interface Tool {
  id: string;
  title: string;
  description: string;
  logo: string;
  badgeLabel: string;
  badgeClassName: string;
  playStoreUrl: string;
  privacyPath: string;
  features: string[];
}

export const TOOLS: Tool[] = [
  {
    id: "flying-ball",
    title: "Flying Ball",
    description:
      "A fast-paced arcade challenge inspired by classic tap-to-fly mechanics. Master precise timing, unlock skins & environments, and take on progressively harder moving pipes.",
    logo: "/flying-ball.png",
    badgeLabel: "Arcade · Skill Game",
    badgeClassName: "bg-[#6AC66F] text-white",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.izitech.izigames",
    privacyPath: "/privacy-policy/flying-ball",
    features: [
      "Skill-based gameplay with progressive difficulty",
      "Unlockable skins & dynamic environments",
      "Achievements & daily challenges",
      "Optional lifetime “Remove Ads” upgrade",
    ],
  },
  {
    id: "spass",
    title: "Safe Password Manager",
    description:
      "A secure, offline password vault with AES-256 encryption. Free plan stores up to 10 passwords with ads; upgrade for unlimited and ad-free.",
    logo: "/spass.png",
    badgeLabel: "Password Manager · Security",
    badgeClassName: "bg-[#3146E8] text-white",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.spass",
    privacyPath: "/privacy-policy/spass",
    features: [
      "AES-256 encryption",
      "Fast search & categories",
      "QR credential sharing (Premium)",
      "Biometric login & auto-logout (Premium)",
      "Import/Export (Premium)",
    ],
  },
];
