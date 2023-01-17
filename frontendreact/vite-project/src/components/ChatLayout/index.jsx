import React from 'react'
import Chat from '../Chat'
import MyModal from '../Modal'
import { Popover } from '@headlessui/react'
import { Outlet } from 'react-router-dom'

const ChatLayout = () => {
    return (
        <>
            <Outlet />
            <ChatPopover />
        </>
    )
}

export default ChatLayout

const ChatPopover = () => {
    return (
        <Popover className="relative">
          <Popover.Button>Chat</Popover.Button>
    
          <Popover.Panel className="absolute z-10">
            <Chat />
          </Popover.Panel>
        </Popover>
      )
}