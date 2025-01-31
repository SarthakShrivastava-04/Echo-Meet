'use client'
import MeetingRoom from '@/components/MeetingRoom';
import MeetingSetup from '@/components/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import Loader from '@/components/Loader';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'

const meeting = () => {
  const {id} = useParams();
  const {user, isLoaded} = useUser();
  const {call, isCallLoading} = useGetCallById(id || '');
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  if(!isLoaded || isCallLoading) return <Loader/>

  return (
    <main className='h-screen w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? (
            <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
          ) : (
            <MeetingRoom/>
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default meeting
