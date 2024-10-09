import { assets } from '@app-assets'
import Container from '@app-components/container'
import { forwardRef } from 'react'
import NavigationItem from './item'
import { NavigationDetails } from '@app-utils'

type Props = {
    disabled: boolean
    closeModal: () => void
}

export const Modal = forwardRef<HTMLDialogElement, Props>((props, ref) => {
    const { disabled, closeModal } = props
    const { Icons } = assets

    return (
        <dialog className='min-w-full min-h-screen bg-[rgba(0,0,0,.5)]' ref={ref}>
            <Container className='absolute right-0 max-w-[240px] w-full min-h-full bg-white-almost flex flex-col pt-[22px] pl-6 pr-[20px]'>
                <button onClick={() => closeModal()} disabled={disabled} className='self-end mb-8'>
                    <img src={Icons.IconCloseMenu} alt="Close Menu" />
                </button>

                <ul className='flex flex-col gap-4'>
                    {NavigationDetails.map((item, key) => (
                        <NavigationItem item={item} key={key} />
                    ))}
                </ul>
            </Container>
        </dialog>
    )
})
