// sapik baik hati
export function isWishVisible(wish) {
  if (wish.visible === false) return false;
  if (wish.visible === true) return true;
  return Boolean(wish.name && wish.name.trim() && wish.message && wish.message.trim());
}
