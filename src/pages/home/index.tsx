import { Container, Main, Navigation, Wrapper } from "@app-components"
import { useDeviceType } from "@app-hooks"
import { assets } from "@app-assets"

export default function Home() {
  const { deviceType } = useDeviceType()
  const { Images, Icons } = assets

  const renderBaseImages = () => {
    switch (deviceType) {
      case 'desktop':
        return (
          <img className="object-contain" src={Images.ImageHeroDesktop} alt="Image Hero Desktop" />
        )
      case 'mobile':
        return (
          <img className="object-contain" src={Images.ImageHeroMobile} alt="Image Hero Mobile" />
        )
      default:
        return ''
    }
  }

  const renderContentDetails = () => (
    <Wrapper className="text-center px-4">
      <h1 className="text-black font-bold text-[36px] leading-[42px] -tracking-[0.5px] mb-4">
        Make remote work
      </h1>

      <p className="text-grey-medium font-medium leading-[26px] space-y-1 mb-6">
        Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
      </p>

      <button className="text-white-almost bg-black max-w-[136px] self-center w-full h-[48px] font-bold leading-[26px] -tracking-[.22px] rounded-[15px] ">
        Learn more
      </button>
    </Wrapper>
  )

  const renderPlatforms = () => (
    <Wrapper className="flex flex-wrap px-4 gap-[29px]">
      {
        [
          Icons.ClientDatabiz,
          Icons.ClientAudiophile,
          Icons.ClientMeet,
          Icons.ClientMaker
        ].map((platform, index) => (
          <img key={index} className="flex-grow object-contain w-auto max-h-[26px] md:max-h-[35.9px]" src={platform} alt="Platform" />
        ))
      }
    </Wrapper>
  )

  return (
    <Main className="font-epilogue flex flex-col gap-6">
      <Navigation deviceType={deviceType} />

      <Container className="flex flex-col gap-12">
        {renderBaseImages()}
        {renderContentDetails()}
        {renderPlatforms()}
      </Container>
    </Main>
  )
}