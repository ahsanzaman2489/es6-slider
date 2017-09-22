/**jquery watch element for change
 * This is the Main slider class from which other class inherits properties and methods
 * @param {mainElement} some string
 * @return {basicConfig} from Dom
 */
import {defaultconfig} from './Config';



export class sliderConfig {

    getConfig(mainElement = defaultconfig.elements.slider) {

        const $slider = $(mainElement),
            $wrapper = $slider.find($(defaultconfig.elements.wrapper)),
            $totalSlides = $slider.find(defaultconfig.elements.slides),
            $pagination = $slider.find($(defaultconfig.elements.pagination)),
            $paginationItem = $pagination.find(defaultconfig.elements.paginationItem),
            $nextTrigger = $slider.find(defaultconfig.direction.NEXT),
            $previousTrigger = $slider.find(defaultconfig.direction.PREVIOUS),
            activeSlide = defaultconfig.activeSlide,
            animationDuration = defaultconfig.animationDuration;

        return {
            $slider,
            $wrapper,
            $pagination,
            $paginationItem,
            $totalSlides,
            $nextTrigger,
            $previousTrigger,
            activeSlide,
            animationDuration,


        }

    }

}