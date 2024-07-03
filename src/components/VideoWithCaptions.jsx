import { useState } from "react";

function VideoWithCaptions() {
  const [videoURL, setVideoURL] = useState("");
  const [captions, setCaptions] = useState({
    text: "",
    start: "",
    end: "",
  });
  const [addedCaptions, setAddedCaptions] = useState([]);
  const [activeCaption, setActiveCaption] = useState("");

  function handleCaptionsChange(e) {
    setCaptions({ ...captions, [e.target.name]: e.target.value });
  }

  function handleAddCaption() {
    if (!videoURL || !captions.text || !captions.start || !captions.end) return;

    setAddedCaptions([...addedCaptions, captions]);

    setCaptions({
      text: "",
      start: "",
      end: "",
    });
  }

  function handleTimeUpdate(e) {
    const currTime = e.target.currentTime;

    const activeCaption = addedCaptions.find(
      (caption) => currTime >= caption.start && currTime <= caption.end
    );

    setActiveCaption(activeCaption ? activeCaption.text : "");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-3xl font-bold mt-2">Video Caption Adder</h2>
      <div>
        <label htmlFor="url" className="font-bold">
          Video URL
        </label>
        <input
          type="text"
          placeholder="Enter Video URL"
          className="border-gray-500 border-2 ml-2 p-1 bg-gray-500 rounded"
          id="url"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <label htmlFor="captions" className="font-bold">
          Captions:{" "}
        </label>
        <textarea
          name="text"
          cols={50}
          rows={3}
          id="captions"
          className="border-2 border-gray-500 ml-2 p-1 bg-gray-500 rounded"
          placeholder="Enter Captions"
          value={captions.text}
          onChange={handleCaptionsChange}
        ></textarea>
      </div>
      <div>
        <label htmlFor="start-time" className="font-bold">
          Start Time:{" "}
        </label>
        <input
          name="start"
          type="number"
          id="start-time"
          className="border-2 border-gray-500 mr-5 p-1 bg-gray-500 rounded"
          placeholder="Start Time (Seconds)"
          value={captions.start}
          onChange={handleCaptionsChange}
        />

        <label htmlFor="end-time" className="font-bold">
          End Time:{" "}
        </label>
        <input
          name="end"
          type="number"
          id="end-time"
          className="border-2 border-gray-500 p-1 bg-gray-500 rounded"
          placeholder="End Time (Seconds)"
          value={captions.end}
          onChange={handleCaptionsChange}
        />
      </div>

      <button
        className="bg-red-700 text-white font-bold p-2 rounded"
        onClick={handleAddCaption}
      >
        Add Caption
      </button>

      {videoURL && (
        <div className="relative flex justify-center">
          <video
            src={videoURL}
            width={600}
            controls
            onTimeUpdate={handleTimeUpdate}
          ></video>

          {activeCaption && (
            <div className="bg-black opacity-70 rounded-md p-2 text-white absolute bottom-10 font-bold max-w-[50%]">
              {activeCaption}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoWithCaptions;
