const el = document.getElementById("html");
const rotateV = 10;
let curDeg = 0;
document.body.addEventListener("mousemove", (event) => {
  if (event.movementX === 0 && event.movementY === 0) return;
  const vector = Math.atan2(event.movementY, event.movementX);
  const deg = Math.round(vector * (180 / Math.PI) + 179);
  if (Math.abs(deg - curDeg) < Math.abs(deg + 360 - curDeg)) {
    const delta = Math.abs(deg - curDeg);
    if (deg > curDeg) {
      curDeg = (curDeg + Math.round(delta / rotateV)) % 360;
    } else {
      curDeg = (curDeg - Math.round(delta / rotateV)) % 360;
    }
  } else {
    const delta = Math.abs(deg + 360 - curDeg);
    if (deg + 360 > curDeg) {
      curDeg = (curDeg + Math.round(delta / rotateV)) % 360;
    } else {
      curDeg = (curDeg - Math.round(delta / rotateV)) % 360;
    }
  }
  document.body.style.cursor = `url(cursores/${curDeg}.svg), default`;
});
