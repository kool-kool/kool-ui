export { default as IconWrapper } from './IconWrapper'

import IconWrapper from './IconWrapper'
import { ReactComponent as ArrowLeft } from './svg/ArrowLeft.svg'
import { ReactComponent as ArrowRight } from './svg/ArrowRight.svg'
import { ReactComponent as Home } from './svg/Home.svg'
import { ReactComponent as List } from './svg/List.svg'
import { ReactComponent as MoreHoriz } from './svg/MoreHoriz.svg'
import { ReactComponent as RoundKeyboardArrowRight } from './svg/RoundKeyboardArrowRight.svg'

export const MoreHorizIcon = IconWrapper(MoreHoriz)
export const HomeIcon = IconWrapper(Home)
export const ListIcon = IconWrapper(List)
export const ArrowLeftIcon = IconWrapper(ArrowLeft)
export const ArrowRightIcon = IconWrapper(ArrowRight)
export const RoundKeyboardArrowRightIcon = IconWrapper(RoundKeyboardArrowRight)
