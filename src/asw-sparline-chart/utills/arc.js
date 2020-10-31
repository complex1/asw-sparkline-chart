export const polarToCartesian = function (centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  }
}

export const describeArc = function (x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle)
  var end = polarToCartesian(x, y, radius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = [
    'M', x, y,
    'L', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    'Z'
  ].join(' ')

  return d
}

export const describeDoughnutArc = function (x, y, innerRadius, outerRadius, startAngle, endAngle) {
  var startInner = polarToCartesian(x, y, innerRadius, endAngle)
  var endInner = polarToCartesian(x, y, innerRadius, startAngle)

  var startOuter = polarToCartesian(x, y, outerRadius, endAngle)
  var endOuter = polarToCartesian(x, y, outerRadius, startAngle)

  var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1'

  var d = [
    'M', startInner.x, startInner.y,
    'L', startOuter.x, startOuter.y,
    'A', outerRadius, outerRadius, 0, largeArcFlag, 0, endOuter.x, endOuter.y,
    'L', endInner.x, endInner.y,
    'A', innerRadius, innerRadius, 0, largeArcFlag, 1, startInner.x, startInner.y
  ].join(' ')

  return d
}
