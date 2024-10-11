import { assets } from '@app-assets'
import ItemOption from './item-option'
import { useState } from 'react'

type Props = {
    item: NavigationItem
}

export default function NavigationItem(props: Props) {
    const { item } = props
    const [isOpen, setIsOpen] = useState(false)

    const handleOptionsOpen = () => {
        if (item.options) return setIsOpen(prev => !prev)
    }

    const imageRenderOnOpenBool = () => {
        if(isOpen) {
            return assets.Icons.IconArrowUp
        } else {
            return assets.Icons.IconArrowDown
        }
    }

    return (
        <li className='relative flex flex-col gap-6 text-grey-medium body-s '>
            {/* Navigation Item Heading */}
            <button onClick={handleOptionsOpen} className='flex items-center gap-4'>
                <h2 className='text-grey-medium body-s hover:text-black transition-colors duration-300 ease-out'>{item.title}</h2>
                {item.options && <img className='object-contain' src={imageRenderOnOpenBool()} alt="" />}
            </button>

            {/* Options */}
            {item.options &&
                <ul className={`absolute top-[40px] right-0 flex flex-col gap-4 ${!isOpen ? 'hidden' : ''} p-6 bg-white-pure shadow-[0_10px_40px_0_rgba(0,0,0,.1491)] rounded-[10px]`}>
                    {item.options.map((option, key) => (
                        <ItemOption option={option} key={key} />
                    ))}
                </ul>
            }
        </li>
    )
}
