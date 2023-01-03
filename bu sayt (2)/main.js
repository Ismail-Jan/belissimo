class Slider {
  constructor(config) {
    this.slider = document.querySelector(config.el);
    console.log(this.slider);
    this.sliderBox = this.slider.querySelector('.slider__box');
    this.sliderItem = this.sliderBox.children
    this.next = this.slider.querySelector('.slider__next')
    this.prev = this.slider.querySelector('.slider__prev')

    this.timeMove = config.time == undefined ? 1000 : config.time
    this.height = this.slider.clientHeight
    this.Width = this.slider.clientWidth

    this.moveSize = this.Width

    this.activeSlide = 0

    this.sliderBox.style = ` position: relative;
                             height: ${this.height}px;
                             overflow:hidden;
                             `

    for (let i = 0; i < this.sliderItem.length; i++) {
      const slides = this.sliderItem[i]

      slides.style = ` position: absolute;
                        width: ${this.width}px;
                        height: ${this.height}px`

      if (i != this.activeSlide) {
        slides.style.transform = `translateX(${this.moveSize}px)`
      }

      if (i == this.sliderItem.length - 1) {
        slides.style.transform = ` translateX(-${this.moveSize}px)`
      }


    }

    this.next.addEventListener('click', () => {
      this.clickBtn(this.next)
    })
    this.prev.addEventListener('click', () => {
      this.clickBtn(this.prev)
    })



  }

  clickBtn(btn) {
    const nextOrPrev = btn == this.next ? `-${this.moveSize}` : this.moveSize

    for (let i = 0; i < this.sliderItem.length; i++) {
      const slides = this.sliderItem[i]
      slides.style.transition = '0ms'


      if (i != this.activeSlide) {
        slides.style.transform = `translateX(${-nextOrPrev}px)`
      }
    }

    this.sliderItem[this.activeSlide].style.transition = this.timeMove +'ms'
    this.sliderItem[this.activeSlide].style.transform = `translateX(${nextOrPrev}px)`


    if (btn == this.next) {
      this.activeSlide++
      console.log(this.activeSlide);
      if (this.activeSlide == this.sliderItem.length) {
        this.activeSlide = 0
      }
    } else if (btn == this.prev) {
      this.activeSlide--
      if (this.activeSlide < 0) {
        this.activeSlide = this.sliderItem.length - 1
      }
    }

    this.sliderItem[this.activeSlide].style.transition = this.timeMove +'ms'
    this.sliderItem[this.activeSlide].style.transform = `translateX(0px)`

  }


}


const slider = new Slider({
  el: ".slider",
  time: 1000
})