/**
 * Created by ahsan on 10/20/16.
 */

/**
 * This is the barrel file to conclude all slider modules
 * @return {slider}
 */


import {createSlider} from './createSlider';
import {sliderInit} from './sliderInit';
import {sliderConfig} from './sliderConfig';



const slider = ()=>{
	return {
		createSlider,
		sliderInit
	}
}


let newSlider = slider();
let doneNewSlider = new newSlider.createSlider();//If you have slider content then do not call this method

let init = new newSlider.sliderInit();


       
