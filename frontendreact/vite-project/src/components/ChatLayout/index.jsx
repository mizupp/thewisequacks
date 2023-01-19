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
		<Popover className="absolute bottom-10 left-10">
			<Popover.Button className="rounded-full shadow-2xl border p-4 text-3xl bg-red-800 text-white font-extrabold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="white"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
					/>
				</svg>
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
