/**
 *  if you dont want to create it then just use sliderInit Class for initiating
 * @methods getResponseDocument() , CreateElements()
 * @return {slider} some object
 */
import {sliderConfig} from './sliderConfig';

export class createSlider extends sliderConfig {

    constructor(element) {
        super();
        this.dom = super().getConfig(element);
        this.getResponseDocument();
    }

    getResponseDocument() {

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {

            if (xhttp.readyState == 4 && xhttp.status == 200) {

                this.CreateElements(JSON.parse(xhttp.responseText));
            }

        };

        xhttp.open("GET", "./data/data.json", true);
        xhttp.send();
    }

    CreateElements(response) {
        let dom = this.dom;
        let slides = response.data;
        let excerpt = null;


        slides.forEach((item, index) => {


            if (item.description.length > 700) {
                excerpt = item.description.substring(0, 700) + ' ...';
            } else {
                excerpt = item.description;
            }

            dom.$wrapper.append(`
            
                <div class="slide">
                <h1>${item.name} <span>${item.location}</span></h1>
                
                <div class="row">
                <div class="col-md-4">
                <div class='logo'>
                <img src="${item.links.logo}" alt="${item.name}" class="img-responsive">
                </div>
                </div>
                <div class="col-md-8">
                <div class='description'>
                <h2>description</h2>
                <p>${excerpt}</p>
                <a href="#!" class="button">read more</a>
                </div>
                </div>
                <div class="clearfix"></div>
                </div>                
                </div>
            `)


            dom.$pagination.append(`
                    <div class="page" data-slide="${index}"></div>
                `)

        })

        dom.$totalSlides = dom.$slider.find('.slide');
        dom.$wrapper.find(dom.$totalSlides).first().addClass('active');
        dom.$paginationItem = dom.$pagination.find('.page');
        dom.$paginationItem.first().addClass('active');

    }


}