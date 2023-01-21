declare module '*.svg' {
  export const ReactComponent: (
    props?:
      | (React.ClassAttributes<SVGElement> & React.SVGAttributes<SVGElement>)
      | null
  ) => React.ReactSVGElement
  const src: string
  export default src
}
