export { default as IconWrapper } from './IconWrapper'

import IconWrapper from './IconWrapper'
import { ReactComponent as Home } from './svg/Home.svg'
import { ReactComponent as MoreHoriz } from './svg/MoreHoriz.svg'

export const MoreHorizIcon = IconWrapper(MoreHoriz)
export const HomeIcon = IconWrapper(Home)
