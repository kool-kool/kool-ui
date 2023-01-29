const getPrefixCls = (suffix?: string, customizePrefix?: string) => {
  if (customizePrefix) {
    return customizePrefix
  }
  return suffix ? `koo-${suffix}` : `koo`
}

export default getPrefixCls
