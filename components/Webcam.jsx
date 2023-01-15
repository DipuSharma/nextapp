import { useRef, useState, useEffect } from "react";
import { toast } from "react-nextjs-toast";

export default function Webcamvideo() {
  const [mediaStream, setMediaStream] = useState();
  const videoRef = useRef(null);
  
  useEffect(() => {
    async function setupWebcamVideo() {
      if (!mediaStream) {
        await setupMediaStream();
      } else {
        const videoCurr = videoRef.current;
        if (!videoCurr) return;
        const video = videoCurr;
        if (!video.srcObject) {
          video.srcObject = mediaStream;
        }
      }
    }
    setupWebcamVideo();
  }, [mediaStream]);

  async function setupMediaStream() {
    try {
      const ms = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: true
      });
      setMediaStream(ms);
    } catch (e) {
      toast.notify(`Ooops session expired.!!!!!!`);
      throw e;
    }
  }
  return (
    <div className="embed-responsive embed-responsive-16by9">
      <video ref={videoRef} width="400" controls/>
      {/* <iframe ref={videoRef}  title="YouTube video" allowfullscreen></iframe> */}
    </div>
  );
}
