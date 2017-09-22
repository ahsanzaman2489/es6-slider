/**
 * This is the final module that initialize the slider
 */
import {sliderConfig} from './sliderConfig';
import {defaultconfig} from './Config';

export class sliderInit extends sliderConfig {

    constructor(element) {

        super();

        this.animation = false;

        setTimeout(() => {
            this.dom = super.getConfig(element);
            this.navigate();
        }, 200)



    }

    navigate() {


        this.dom.$paginationItem = this.dom.$slider.find('div.page');


        this.dom.$nextTrigger.click(() => {
            this.next();

        });

        this.dom.$previousTrigger.click(() => {

            this.previous();

        });

        this.dom.$paginationItem.click((e) => {

            this.target(e);

        });


    }

    next() {

        if (!this.animation) {
            this.slide(defaultconfig.direction.NEXT);
        }
    }


    previous() {
        if (!this.animation) {
            this.slide(defaultconfig.direction.PREVIOUS);
        }
    }

    target(e) {
        if (!this.animation) {
            this.slideTo(e);
        }
    }

    slide(direction) {


        this.animation = true;
        let previousSlide = null;


        if (direction == '.next') {
            previousSlide = this.dom.activeSlide;
            this.dom.activeSlide++;

            if (this.dom.activeSlide >= this.dom.$totalSlides.length) {
                this.dom.activeSlide = 0;
                previousSlide = this.dom.$totalSlides.length - 1;

            }
            this.isSliding('left', 'next', previousSlide)
        } else {
            previousSlide = this.dom.activeSlide;
            this.dom.activeSlide--;

            if (this.dom.activeSlide < 0) {
                this.dom.activeSlide = this.dom.$totalSlides.length - 1;

                previousSlide = 0;

            }
            this.isSliding('right', 'previous', previousSlide)

        }


    }
    slideTo(e) {



        let previousSlide = this.dom.activeSlide;
        this.dom.activeSlide = parseInt(e.target.dataset.slide);

        if (previousSlide == this.dom.activeSlide) return;

        this.animation = true;

        if (this.dom.activeSlide > previousSlide) {
            this.isSliding('left', 'next', previousSlide)
        } else {
            this.isSliding('right', 'previous', previousSlide)
        }


    }


    isSliding(direction, movement, previousSlide) {

        this.dom.$totalSlides[this.dom.activeSlide].classList.add(movement);
        setTimeout(() => {
            this.dom.$totalSlides[this.dom.activeSlide].classList.add(direction);
            this.dom.$totalSlides[previousSlide].classList.add(direction);
            this.dom.$paginationItem[this.dom.activeSlide].classList.add('active');
            this.dom.$paginationItem[previousSlide].className = 'page';
        }, 70);

        this.slideComplete(previousSlide)
    }


    slideComplete(previousSlide) {
        setTimeout(() => {

            this.dom.$totalSlides[previousSlide].className = "slide";
            this.dom.$totalSlides[this.dom.activeSlide].className = "slide active";
            this.animation = false;

        }, this.dom.animationDuration + 70);


    }


}