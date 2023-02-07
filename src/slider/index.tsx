import NormalSlider from 'kool-ui/slider/Slider'
import SliderVertical from 'kool-ui/slider/SliderVertical'

type SliderTYpe = typeof NormalSlider

type Sliders = SliderTYpe & {
  Vertical: typeof SliderVertical
}

const Slider = NormalSlider as Sliders
Slider.Vertical = SliderVertical

export default Slider
