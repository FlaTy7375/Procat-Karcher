const AVATAR_PALETTE = [
  { bg: "#FED219", color: "#1C1E22" },
  { bg: "#FFF3B0", color: "#1C1E22" },
  { bg: "#1C1E22", color: "#FFFFFF" },
  { bg: "#22B8E6", color: "#FFFFFF" },
  { bg: "#E7E2D6", color: "#1C1E22" },
];

export function getInitials(name = "") {
  const parts = String(name).trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return "ПК";
}

export function getAvatarPalette(name = "") {
  const text = String(name);
  let hash = 0;
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % AVATAR_PALETTE.length;
  return AVATAR_PALETTE[index];
}
