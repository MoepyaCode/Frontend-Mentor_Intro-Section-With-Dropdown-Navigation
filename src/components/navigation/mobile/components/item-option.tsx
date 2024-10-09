type Props = {
  option: NavigationItemOption
}

export default function ItemOption(props: Props) {
  const { option } = props

  return (
    <li  className="flex items-center gap-4">
      {option.icon && <img className='object-contain' src={option.icon} alt={`${option.title} icon`} />}
      <p>{option.title}</p>
    </li>
  )
}
