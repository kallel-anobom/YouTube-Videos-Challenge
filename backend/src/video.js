module.exports = function howLongToWatchTheVideos(weeks, videoDurations, videos) {
  let countDays = 0;
  
  console.log(videos)
  const weekDay = () => countDays % weeks.length;
  const weekTimeAvailable = () => weeks[weekDay()];
  
  let videosWatched = [];
  
  function totalWatchedByDay() {
    const durationArr = videosWatched[weekDay()];
    
    return (Array.isArray(durationArr)) ?
    durationArr.reduce((acc, d) => acc + d, 0)
    : 0;
  }

  function tryWatch(video) {    
    if (weekDay() === 0) {
      videosWatched = [];
    }

    const totalTimeAvailable = weekTimeAvailable() - totalWatchedByDay();

    if (video > totalTimeAvailable) {

      if (!videosWatched[weekDay()]) {
        videosWatched[weekDay()] = [];
      }
  
      videosWatched[weekDay()].push(video);
      return;
    } else {
      countDays++;
      tryWatch(video);
    }
  }
  
  while (videoDurations.length) {
    let videoDuration = videoDurations.shift();
    tryWatch(videoDuration);
    continue;
  }

  return countDays;
}
