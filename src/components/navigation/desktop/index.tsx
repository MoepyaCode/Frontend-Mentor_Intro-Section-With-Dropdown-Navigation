import { assets } from "@app-assets";
import Wrapper from "@app-components/wrapper";
import AuthButtons from "./components/auth-buttons";
import { NavigationDetails } from "@app-utils";
import NavigationItem from "./components/item";

export function Desktop() {

  const renderLogo = () => (
    <img src={assets.Logo} alt='Snap Logo' />
  )

  return (
    <Wrapper className="px-10 pt-6 flex items-center justify-between w-full">
      <Wrapper className="flex items-center gap-[62.24px]">
        {renderLogo()}

        <ul className='flex flex-row gap-10'>
          {NavigationDetails.map((item, key) => (
            <NavigationItem item={item} key={key} />
          ))}
        </ul>
      </Wrapper>

      <AuthButtons />
    </Wrapper>
  )
}
