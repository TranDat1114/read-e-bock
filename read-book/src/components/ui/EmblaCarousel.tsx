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
import { AspectRatio } from './aspect-ratio'
import { Button } from './button'
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
  // slides: number[]
  details: Book[]
  options?: EmblaOptionsType
  variant?: 'default' | 'banner'
  // imageByIndex: (index: number) => string
}

const TWEEN_FACTOR = 4.2

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max)

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { details, options, variant } = props
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

  if (variant != 'banner') {
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
                <AspectRatio ratio={2 / 3}>
                  <img
                    className="block w-full h-full object-cover object-center"
                    src={book.image ?? bookCover}
                    alt="Your alt text"
                  />
                </AspectRatio>

                <div className="p-4">
                  <h1 className="text-xl font-semibold text-center h-12">{book.name}</h1>
                  <div className='flex flex-row justify-between gap-4'>
                    {/* <Link to={book.link} target="_blank" rel="noreferrer" className="text-blue-500"><Button variant={'outline'}>Đọc ngay</Button></Link> */}
                    <p className="text-xs line-clamp-2 rounded-lg p-2">{book.author}</p>
                    <div className="text-xs text-gray-400 p-2 line-clamp-2">{book.categories.map((category, index) => (
                      <span key={index}>{category.name}{index < book.categories.length - 1 ? ", " : ""}</span>
                    ))}</div>
                  </div>
                  <div className='min-h-12'>
                  <p className="text-sm line-clamp-2">{book.description}</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                  <Button variant={'outline'}>Đọc ngay</Button>
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
  else {
    return (
      <div className="embla_banners">
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
                  className="block w-full h-96 object-cover object-center"
                  src={book.image ?? bookCover}
                  alt="Your alt text"
                />
              </div>
            ))}
          </div>
          <div className="absolute w-full items-center top-1/2 -translate-y-1/2 flex justify-between ">
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
          </div>
        </div>
      </div>
    )
  }

}


export default EmblaCarousel
