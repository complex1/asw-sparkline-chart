export const getTooltipText = function (value, index) {
  if (this.hasLabel) {
    return `${this.data[index].label}: ${value}`
  }
  return `${value}`
}
