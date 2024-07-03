import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold">Video Caption Adder</h2>
      <div>
        <label htmlFor="url">Video URL</label>
        <input
          type="text"
          placeholder="Enter Video URL"
          className="border-gray-500 border-2 ml-2 px-1 py-1"
          id="url"
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="captions">Captions: </label>
        <textarea
          name=""
          cols={50}
          rows={3}
          id="captions"
          className="border-2 border-gray-500 ml-2 p-1"
          placeholder="Enter Captions"
        ></textarea>
      </div>
      <div>
        <label htmlFor="start-time">Start Time: </label>
        <input
          type="text"
          id="start-time"
          className="border-2 border-gray-500 mr-5 py-1 px-1"
          placeholder="Start Time (Seconds)"
        />

        <label htmlFor="start-time">End Time: </label>
        <input
          type="text"
          id="start-time"
          className="border-2 border-gray-500 py-1 px-1"
          placeholder="End Time (Seconds)"
        />
      </div>

      <video
        src="https://videos.pexels.com/video-files/5538137/5538137-hd_1920_1080_25fps.mp4"
        width={700}
        controls
      ></video>
    </div>
  );
}

export default App;
