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
        <li className='flex flex-col gap-6'>
            {/* Navigation Item Heading */}
            <button onClick={handleOptionsOpen} className='flex items-center gap-4'>
                <h2 className='font-medium text-grey-medium leading-[26px] '>{item.title}</h2>
                {item.options && <img className='object-contain' src={imageRenderOnOpenBool()} alt="" />}
            </button>

            {/* Options */}
            {item.options &&
                <ul className={`flex flex-col gap-4 pl-6 ${!isOpen ? 'hidden' : ''}`}>
                    {item.options.map((option, key) => (
                        <ItemOption option={option} key={key} />
                    ))}
                </ul>
            }
        </li>
    )
}
