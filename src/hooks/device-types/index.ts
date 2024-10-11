import { useEffect, useState } from "react";


export function useDeviceType() {
    const [width, setWidth] = useState(window.innerWidth)
    const [deviceType, setDeviceType] = useState<DeviceTypes>(null)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (width >= 1024) {
            setDeviceType('desktop')
        } else {
            setDeviceType('mobile')
        }
    }, [width, deviceType, setDeviceType])

    return { deviceType }
}