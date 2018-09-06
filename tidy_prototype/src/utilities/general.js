export function isPointWithinRect(point, rect) {
	return (
		point.x > rect.x &&
		point.x < (rect.x + rect.width) &&
		point.y > rect.y &&
		point.y < (rect.y + rect.height)
	)
}

export function getRectMidpoint({ x, y, width, height }) {
	return {
		x: x + width/2,
		y: y + height/2
	}
}

export const getOffsetPos = (ev) => {
  const rect = ev.target.getBoundingClientRect();
  return new Pos(
    ev.clientX - rect.x,
    ev.clientY - rect.y
  )
}

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}