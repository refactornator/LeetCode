/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function(n, meetings) {
  meetings.sort((a, b) => a[0] - b[0]);
  const roomEndTimes = Array(n).fill(0);
  const roomCounts = Array(n).fill(0);

  for (const [start, end] of meetings) {
    let roomFound = false;

    for (let i = 0; i < n; i++) {
      if (start >= roomEndTimes[i]) {
        roomEndTimes[i] = end;
        roomCounts[i]++;
        roomFound = true;
        break;
      }
    }

    if (!roomFound) {
      const earliestEnd = Math.min(...roomEndTimes);
      const earliestRoom = roomEndTimes.indexOf(earliestEnd);
      roomEndTimes[earliestRoom] = earliestEnd + (end - start);
      roomCounts[earliestRoom]++;
    }
  }

  const maxMeetings = Math.max(...roomCounts);
  return roomCounts.indexOf(maxMeetings);
};