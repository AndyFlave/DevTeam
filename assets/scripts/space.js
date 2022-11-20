"use strict"; window.requestAnimFrame = window.requestAnimationFrame; var centerX, centerY, star, i, canvas = document.getElementById("space"), c = canvas.getContext("2d"), numStars = 1900, radius = "0." + Math.floor(9 * Math.random()) + 1,speedStars = 2, focalLength = speedStars * canvas.width, warp = 0, stars = [], animate = !0; function executeFrame() { animate && requestAnimFrame(executeFrame), moveStars(), drawStars() } function initializeStars() { for (centerX = canvas.width / 2, centerY = canvas.height / 2, stars = [], i = 0; i < numStars; i++)star = { x: Math.random() * canvas.width, y: Math.random() * canvas.height, z: Math.random() * canvas.width, o: "0." + Math.floor(99 * Math.random()) + 1 }, stars.push(star) } function moveStars() { for (i = 0; i < numStars; i++)(star = stars[i]).z--, star.z <= 0 && (star.z = canvas.width) } function drawStars() { var a, t, r; for (canvas.width == window.innerWidth && canvas.width == window.innerWidth || (canvas.width = window.innerWidth, canvas.height = window.innerHeight, initializeStars()), 0 == warp && (c.fillStyle = "rgba(25,25,30,1)", c.fillRect(0, 0, canvas.width, canvas.height)), c.fillStyle = "rgba(209, 255, 255, " + radius + ")", i = 0; i < numStars; i++)a = ((star = stars[i]).x - centerX) * (focalLength / star.z), a += centerX, t = (star.y - centerY) * (focalLength / star.z), t += centerY, r = focalLength / star.z * 1, c.fillRect(a, t, r, r), c.fillStyle = "rgba(209, 255, 255, " + star.o + ")" } initializeStars(), executeFrame();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbnZhcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJyZXF1ZXN0QW5pbUZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2VudGVyWCIsImNlbnRlclkiLCJzdGFyIiwiaSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsIm51bVN0YXJzIiwicmFkaXVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZm9jYWxMZW5ndGgiLCJ3aWR0aCIsIndhcnAiLCJzdGFycyIsImFuaW1hdGUiLCJleGVjdXRlRnJhbWUiLCJtb3ZlU3RhcnMiLCJkcmF3U3RhcnMiLCJpbml0aWFsaXplU3RhcnMiLCJoZWlnaHQiLCJ4IiwieSIsInoiLCJvIiwicHVzaCIsInBpeGVsWCIsInBpeGVsWSIsInBpeGVsUmFkaXVzIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwibWFwcGluZ3MiOiJBQUFBLGFBQ0FBLE9BQU9DLGlCQUNDRCxPQUFPRSxzQkFFZixJQU9JQyxRQUFTQyxRQUdaQyxLQUNHQyxFQVhBQyxPQUFTQyxTQUFTQyxlQUFlLFNBQ2pDQyxFQUFJSCxPQUFPSSxXQUFXLE1BRXRCQyxTQUFXLEtBQ1hDLE9BQVMsS0FBT0MsS0FBS0MsTUFBc0IsRUFBaEJELEtBQUtFLFVBQWdCLEVBQ2hEQyxZQUE2QixFQUFmVixPQUFPVyxNQUNyQkMsS0FBTyxFQUdQQyxNQUFRLEdBSVJDLFNBQVUsRUFJZCxTQUFTQyxlQUVKRCxTQUNIcEIsaUJBQWlCcUIsY0FDbEJDLFlBQ0FDLFlBR0QsU0FBU0Msa0JBS1IsSUFKQXRCLFFBQVVJLE9BQU9XLE1BQVEsRUFDekJkLFFBQVVHLE9BQU9tQixPQUFTLEVBRTFCTixNQUFRLEdBQ0hkLEVBQUksRUFBR0EsRUFBSU0sU0FBVU4sSUFDekJELEtBQU8sQ0FDTnNCLEVBQUdiLEtBQUtFLFNBQVdULE9BQU9XLE1BQzFCVSxFQUFHZCxLQUFLRSxTQUFXVCxPQUFPbUIsT0FDMUJHLEVBQUdmLEtBQUtFLFNBQVdULE9BQU9XLE1BQzFCWSxFQUFHLEtBQU9oQixLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFBaUIsR0FFNUNJLE1BQU1XLEtBQUsxQixNQUliLFNBQVNrQixZQUNSLElBQUtqQixFQUFJLEVBQUdBLEVBQUlNLFNBQVVOLEtBQ3pCRCxLQUFPZSxNQUFNZCxJQUNSdUIsSUFFRHhCLEtBQUt3QixHQUFLLElBQ2J4QixLQUFLd0IsRUFBSXRCLE9BQU9XLE9BS25CLFNBQVNNLFlBQ1IsSUFBSVEsRUFBUUMsRUFBUUMsRUFjcEIsSUFYSTNCLE9BQU9XLE9BQVNsQixPQUFPbUMsWUFBYzVCLE9BQU9XLE9BQVNsQixPQUFPbUMsYUFDL0Q1QixPQUFPVyxNQUFRbEIsT0FBT21DLFdBQ3RCNUIsT0FBT21CLE9BQVMxQixPQUFPb0MsWUFDdkJYLG1CQUVXLEdBQVJOLE9BQ0hULEVBQUUyQixVQUFZLG1CQUNkM0IsRUFBRTRCLFNBQVMsRUFBRyxFQUFHL0IsT0FBT1csTUFBT1gsT0FBT21CLFNBR3ZDaEIsRUFBRTJCLFVBQVksdUJBQXlCeEIsT0FBUyxJQUMzQ1AsRUFBSSxFQUFHQSxFQUFJTSxTQUFVTixJQUd6QjBCLElBRkEzQixLQUFPZSxNQUFNZCxJQUVFcUIsRUFBSXhCLFVBQVljLFlBQWNaLEtBQUt3QixHQUNsREcsR0FBVTdCLFFBQ1Y4QixHQUFVNUIsS0FBS3VCLEVBQUl4QixVQUFZYSxZQUFjWixLQUFLd0IsR0FDbERJLEdBQVU3QixRQUNWOEIsRUFBbUJqQixZQUFjWixLQUFLd0IsRUFBeEIsRUFFZG5CLEVBQUU0QixTQUFTTixFQUFRQyxFQUFRQyxFQUFhQSxHQUN4Q3hCLEVBQUUyQixVQUFZLHVCQUF5QmhDLEtBQUt5QixFQUFJLElBOURsREwsa0JBbUVBSCIsImZpbGUiOiJjYW52YXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2Jhc2VkIG9uIGFuIEV4YW1wbGUgYnkgQGN1cnJhblxyXG53aW5kb3cucmVxdWVzdEFuaW1GcmFtZSA9IChmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWVcclxufSkoKTtcclxudmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BhY2VcIik7XHJcbnZhciBjID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbnZhciBudW1TdGFycyA9IDE5MDA7XHJcbnZhciByYWRpdXMgPSAnMC4nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSkgKyAxO1xyXG52YXIgZm9jYWxMZW5ndGggPSBjYW52YXMud2lkdGggKiAyO1xyXG52YXIgd2FycCA9IDA7XHJcbnZhciBjZW50ZXJYLCBjZW50ZXJZO1xyXG5cclxudmFyIHN0YXJzID0gW10sXHJcblx0c3RhcjtcclxudmFyIGk7XHJcblxyXG52YXIgYW5pbWF0ZSA9IHRydWU7XHJcblxyXG5pbml0aWFsaXplU3RhcnMoKTtcclxuXHJcbmZ1bmN0aW9uIGV4ZWN1dGVGcmFtZSgpIHtcclxuXHJcblx0aWYgKGFuaW1hdGUpXHJcblx0XHRyZXF1ZXN0QW5pbUZyYW1lKGV4ZWN1dGVGcmFtZSk7XHJcblx0bW92ZVN0YXJzKCk7XHJcblx0ZHJhd1N0YXJzKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxpemVTdGFycygpIHtcclxuXHRjZW50ZXJYID0gY2FudmFzLndpZHRoIC8gMjtcclxuXHRjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDI7XHJcblxyXG5cdHN0YXJzID0gW107XHJcblx0Zm9yIChpID0gMDsgaSA8IG51bVN0YXJzOyBpKyspIHtcclxuXHRcdHN0YXIgPSB7XHJcblx0XHRcdHg6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMud2lkdGgsXHJcblx0XHRcdHk6IE1hdGgucmFuZG9tKCkgKiBjYW52YXMuaGVpZ2h0LFxyXG5cdFx0XHR6OiBNYXRoLnJhbmRvbSgpICogY2FudmFzLndpZHRoLFxyXG5cdFx0XHRvOiAnMC4nICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTkpICsgMVxyXG5cdFx0fTtcclxuXHRcdHN0YXJzLnB1c2goc3Rhcik7XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb3ZlU3RhcnMoKSB7XHJcblx0Zm9yIChpID0gMDsgaSA8IG51bVN0YXJzOyBpKyspIHtcclxuXHRcdHN0YXIgPSBzdGFyc1tpXTtcclxuXHRcdHN0YXIuei0tO1xyXG5cclxuXHRcdGlmIChzdGFyLnogPD0gMCkge1xyXG5cdFx0XHRzdGFyLnogPSBjYW52YXMud2lkdGg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBkcmF3U3RhcnMoKSB7XHJcblx0dmFyIHBpeGVsWCwgcGl4ZWxZLCBwaXhlbFJhZGl1cztcclxuXHJcblx0Ly8gUmVzaXplIHRvIHRoZSBzY3JlZW5cclxuXHRpZiAoY2FudmFzLndpZHRoICE9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGNhbnZhcy53aWR0aCAhPSB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG5cdFx0Y2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcblx0XHRjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cdFx0aW5pdGlhbGl6ZVN0YXJzKCk7XHJcblx0fVxyXG5cdGlmICh3YXJwID09IDApIHtcclxuXHRcdGMuZmlsbFN0eWxlID0gXCJyZ2JhKDI1LDI1LDMwLDEpXCI7XHJcblx0XHRjLmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHRjLmZpbGxTdHlsZSA9IFwicmdiYSgyMDksIDI1NSwgMjU1LCBcIiArIHJhZGl1cyArIFwiKVwiO1xyXG5cdGZvciAoaSA9IDA7IGkgPCBudW1TdGFyczsgaSsrKSB7XHJcblx0XHRzdGFyID0gc3RhcnNbaV07XHJcblxyXG5cdFx0cGl4ZWxYID0gKHN0YXIueCAtIGNlbnRlclgpICogKGZvY2FsTGVuZ3RoIC8gc3Rhci56KTtcclxuXHRcdHBpeGVsWCArPSBjZW50ZXJYO1xyXG5cdFx0cGl4ZWxZID0gKHN0YXIueSAtIGNlbnRlclkpICogKGZvY2FsTGVuZ3RoIC8gc3Rhci56KTtcclxuXHRcdHBpeGVsWSArPSBjZW50ZXJZO1xyXG5cdFx0cGl4ZWxSYWRpdXMgPSAxICogKGZvY2FsTGVuZ3RoIC8gc3Rhci56KTtcclxuXHJcblx0XHRjLmZpbGxSZWN0KHBpeGVsWCwgcGl4ZWxZLCBwaXhlbFJhZGl1cywgcGl4ZWxSYWRpdXMpO1xyXG5cdFx0Yy5maWxsU3R5bGUgPSBcInJnYmEoMjA5LCAyNTUsIDI1NSwgXCIgKyBzdGFyLm8gKyBcIilcIjtcclxuXHRcdC8vYy5maWxsKCk7XHJcblx0fVxyXG59XHJcblxyXG5leGVjdXRlRnJhbWUoKTsiXX0=