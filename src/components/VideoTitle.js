const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 text-lg"> {overview}</p>
      
      

      <div className="">
        <button className="bg-white font-semibold text-2xl text-black px-14 py-2 rounded-lg hover:bg-opacity-80"><svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 inline text-black">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
</svg>&nbsp;  play</button>
        <button className="text-2xl font-semibold  bg-gray-500 text-black px-14 py-2 rounded-lg mx-2">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
