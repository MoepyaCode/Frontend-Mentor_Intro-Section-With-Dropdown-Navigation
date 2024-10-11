import Wrapper from '@app-components/wrapper'

export default function AuthButtons() {
    return (
        <Wrapper className='flex flex-col w-full gap-4 body-s text-grey-medium md:body-s'>
            <button>
                Login
            </button>

            <button className='border-[1.5px] border-grey-medium h-[42px] rounded-[14px]'>
                Register
            </button>
        </Wrapper>
    )
}
