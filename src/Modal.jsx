import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const modalRoot = document.getElementById('modal')

export const Modal = ({ children }) => {
	let elRef = useRef(null)
	if (!elRef.current) {
		elRef.current = document.createElement('div')
	}

	useEffect(() => {
		modalRoot.appendChild(elRef.current)

		return () => {
			modalRoot.removeChild(elRef.current)
		}
	}, [])

	return createPortal(
		<div>{children}</div>,
		elRef.current,
	)

}
