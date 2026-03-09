export function toShow(node) {
  node.className = node.className.replace("v-none", "v-show");
}

export function toHidden(node) {
  node.className = node.className.replace("v-show", "v-none");
}

export function validatePrice(currentFunds, currentAmount) {
  // TODO: 금액이 현재 자산보다 이하인지
  // currentFunds 현재 자산 / currentAmount 작성한 금액
  return currentFunds >= currentAmount;
}

export function validateRequired({ category, description, price }) {
  // TODO: 값이 존재하는지
  // Boolean(category) && Boolean(description) && Booelan(price) && price > 0
  return !!category && !!description && !!price && price > 0;
}
