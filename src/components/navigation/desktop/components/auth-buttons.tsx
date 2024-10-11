import Wrapper from '@app-components/wrapper'

export default function AuthButtons() {
    return (
        <Wrapper className='flex gap-10 body-s '>
            <button className='text-grey-medium body-s hover:text-black transition-colors duration-300 ease-out'>
                Login
            </button>

            <button className='border-[1.5px] border-grey-medium w-[104px] h-[42px] rounded-[14px] text-grey-medium body-s hover:text-black hover:border-black transition-colors duration-300 ease-out'>
                Register
            </button>
        </Wrapper>
    )
}
