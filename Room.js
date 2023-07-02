import React from 'react'
import { useParams } from "react-router-dom"
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"

const Room = () => {
  const { roomID } = useParams();
  console.log(roomID);
  const meeting = async(element) => {
    const appID = 612659841;
    const serverSecret = "2f6674f6322173a3f2c0443d77f23b46";
   
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,serverSecret,roomID,Date.now().toString(),
      "Narendra Reddy"
    );
     
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container:element,scenario:{
        mode:ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return <div ref={meeting} style={{ width:"100vw" , height:"100vh"}}></div>;
};

export default Room
