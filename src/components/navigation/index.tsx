import { Desktop } from "./desktop"
import { Mobile } from "./mobile"

type Props = {
    deviceType: DeviceTypes
}

export default function Navigation(props: Props) {
    const { deviceType } = props

    const renderNavigation = () => {
        switch (deviceType) {
            case 'desktop':
                return <Desktop />
            case 'mobile':
                return <Mobile />
            default:
                return ''
        }
    }
    
    return (
        <nav className="w-full">
            {renderNavigation()}
        </nav>
    )
}
