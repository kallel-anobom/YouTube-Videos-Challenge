require('dotenv').config();

const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.SECRET_API_YOUTUBE);

const howLongToWatchTheVideos = require('../video');

module.exports = {
  async index (req, res) {
    const {	durations, subjects } = req.body;
		
    try {
      //Search for videos with the subject
      const searchVideoForTerms = await youtube.searchVideos(subjects, 200);
  
      //Get the details of each specific video by id
      const getDetailsOfEachVideoById = searchVideoForTerms.map(resultVideo => {
        const url = `https://www.youtube.com/watch?v=${resultVideo.raw.id.videoId}`
        return youtube.getVideo(url);
      });
      
      //Get the details of each video after completing the request
      const videoDetails = await Promise.all(getDetailsOfEachVideoById);
      
      //Get Durations of each video
      const durationsOfEachVideo = videoDetails.map(video => {
        const { duration } = video;
        const getValuesInDurations = Object.values(duration); 
    
        return getValuesInDurations;
      });
      
      //Delete video that is 0
      durationsOfEachVideo.forEach(durations => {
        durations.filter(function(item) {
          return item !== 0;
        });		
      });
  
      //Sum up all duration values ​​for each video
      let sumTheDurationsOfEachTime = durationsOfEachVideo.map(newArray => newArray.reduce((a, b) => a + b, 0));

      //Convert minut of each video for seconds  
      let transformMinutToSecInDurations = durations.map(duration => duration % 60);
      let transformMinutToSecInDurationsVideos = sumTheDurationsOfEachTime.map(durationVideo => durationVideo % 60);
  
      const result = howLongToWatchTheVideos(transformMinutToSecInDurations, transformMinutToSecInDurationsVideos, videoDetails);

      return result;
    } catch (err) {
      console.error(err);
    }
  }
}