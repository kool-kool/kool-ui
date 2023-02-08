import NormalSlider from './Slider'
import SliderVertical from './SliderVertical'

type SliderTYpe = typeof NormalSlider

type Sliders = SliderTYpe & {
  Vertical: typeof SliderVertical
}

const Slider = NormalSlider as Sliders
Slider.Vertical = SliderVertical

export default Slider
