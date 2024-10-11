type Props = {
  option: NavigationItemOption
}

export default function ItemOption(props: Props) {
  const { option } = props

  return (
    <li  className="flex items-center gap-4 min-w-max cursor-pointer text-grey-medium body-s hover:text-black transition-colors duration-300 ease-out">
      {option.icon && <img className='object-contain' src={option.icon} alt={`${option.title} icon`} />}
      <p className="">{option.title}</p>
    </li>
  )
}
