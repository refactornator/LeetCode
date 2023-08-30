/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (stack.length && stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(asteroid)) {
        stack.pop();
      }
      if (stack.length && stack[stack.length - 1] === Math.abs(asteroid)) {
        stack.pop();
      } else if (!stack.length || stack[stack.length - 1] < 0) {
        stack.push(asteroid);
      }
    }
  }

  return stack;
};