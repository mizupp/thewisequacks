import React, { Fragment } from "react"
import Chat from "../Chat"
import { Popover, Transition } from "@headlessui/react"
import { Outlet } from "react-router-dom"

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
		<Popover className="absolute bottom-0 left-10">
			<Popover.Button className="rounded-full shadow-2xl border p-4 text-3xl bg-emerald-200 text-white font-extrabold">
				🗣️
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute left-0 -translate-y-48 z-10 mt-3 w-screen max-w-xs transform px-4 sm:px-0 lg:max-w-md">
					<div className="bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 p-4">
						<Chat />
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	)
}
