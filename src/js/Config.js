/**
 * This is a default congig for slider
 * @return {defaultconfig} some object
 */
export const defaultconfig = {
    elements: {
        slider: '.slider',
        wrapper: '.slider-wrapper',
        slides: '.slide',
        pagination: '.slider-pagination',
        paginationItem: '.page',
    },

    direction: {
        NEXT: '.next',
        PREVIOUS: '.previous'
    },
    activeSlide: 0,
    animationDuration: 600,
};