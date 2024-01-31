import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
// import { DotButton, useDotButton } from '@/components/ui/EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/ui/EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'
import { flushSync } from 'react-dom'
import bookCover from "../../../public/book.jpg"
interface Book {
  name: string;
  author: string;
  description: string;
  image?: string;
  link: string;
  categories: Category[];
  status: string;
  view: number;
  lastest?: number;
}

interface Category {
  name: string;
}
type PropType = {
  slides: number[]
  details?: Book[]
  options?: EmblaOptionsType
  imageByIndex: (index: number) => string
}

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel: React.FC<PropType> = (props) => {
  const [details, setDetails] = useState<Book[]>([])
  const { slides, options, imageByIndex } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()])
  const [tweenValues, setTweenValues] = useState<number[]>([])

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    // if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
  }, [])

  const onScroll = useCallback(() => {
    if (!emblaApi) return

    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target()
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target)
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
          }
        })
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR)
      return numberWithinRange(tweenValue, 0, 1)
    })
    setTweenValues(styles)
  }, [emblaApi, setTweenValues])

  useEffect(() => {
    if (!emblaApi) return

    onScroll()
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    emblaApi.on('reInit', onScroll)
  }, [emblaApi, onScroll])

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
  //   emblaApi,
  //   onButtonClick
  // )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onButtonClick)

  if (details.length === 0) {
    return (
      <div className="embla">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container ">
            {slides.map((index) => (
              <div className="embla__slide" key={index} style={{
                ...(tweenValues.length && { opacity: tweenValues[index] })
              }}>
                {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */}
                <img
                  className="block h-96 w-full object-cover object-center"
                  src={imageByIndex(index)}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-full items-center top-1/2 -translate-y-1/2 flex justify-between ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
          key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
          ))}
        </div> */}
      </div>
    )
  } else {
    return (
      <div className="embla">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="embla__container ">
            {details.map((book, index) => (
              <div className="embla__slide" key={index} style={{
                ...(tweenValues.length && { opacity: tweenValues[index] })
              }}>
                {/* <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div> */}
                <img
                  className="block h-96 w-full object-cover object-center"
                  src={book.image ?? bookCover}
                  alt="Your alt text"
                />

                <div className="p-4">
                  <h1 className="text-xl font-semibold text-white">{book.name}</h1>
                  <p className="text-sm text-white">{book.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute w-full items-center top-1/2 -translate-y-1/2 flex justify-between ">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
          key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
          ))}
        </div> */}
      </div>
    )
  }
}

export default EmblaCarousel
