import { assets } from '@app-assets'
import { Wrapper } from '@app-components'
import { ElementRef, useRef, useState } from 'react'
import { Modal } from './components'

export function Mobile() {
    const { Icons, Logo } = assets
    const modalRef = useRef<ElementRef<'dialog'>>(null)
    const [disabled, setDisabled] = useState(false)

    const handleMenu = () => {
        if (modalRef.current?.open) {
            setDisabled(false)
            modalRef.current?.close()
        } else {
            setDisabled(true)
            modalRef.current?.showModal()
        }
    }

    return (
        <Wrapper className='flex justify-between p-4 pb-0 md:px-10 md:pt-6'>
            <img className='object-contain' src={Logo} alt="Snap Logo" />
            <button disabled={disabled} onClick={() => handleMenu()}>
                <img className='object-contain' src={Icons.IconMenu} alt="Menu" />
            </button>

            <Modal closeModal={handleMenu} disabled={!disabled} ref={modalRef} />
        </Wrapper>
    )
}
