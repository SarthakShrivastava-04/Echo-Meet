"use client";
import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import Loader from "./Loader";
import { useRouter, useSearchParams } from "next/navigation";
import { Users } from "lucide-react";
import EndCall from "./EndCall";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const isPersonalRoom = !!searchParams.get("personal");
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();
  const [showParticipants, setShowParticipants] = useState(true);
  const router = useRouter();

  if (callingState !== CallingState.JOINED) return <Loader />;
  return (
    <section className="relative h-screen w-full overflow-hidden pt-4 text-white">
      <div className="relative flex size-full items-center justify-center">
        <div className=" flex size-full max-w-[1000px] items-center">
          <PaginatedGridLayout />
        </div>
        <div
          className={`h-[calc(100vh-86px)] ml-2 ${
            showParticipants ? "block" : "hidden"
          }`}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>
      </div>
      <div className="fixed bottom-0 flex flex-wrap w-full items-center justify-center gap-5">
        <CallControls onLeave={() => router.push(`/`)} />
        <CallStatsButton />
        <button
          onClick={() => {
            setShowParticipants((prev) => !prev);
          }}
        >
          <div className=" cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
            <Users size={20} className="text-white" />
          </div>
        </button>
        {!isPersonalRoom && <EndCall />}
      </div>
    </section>
  );
};

export default MeetingRoom;
