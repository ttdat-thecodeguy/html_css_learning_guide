import { Processor } from './_processor.js';
import { ProgressBar } from './components/ProgressBar.js';


const components = {
    "progress-bar": ProgressBar
}

$(document).ready(function () {
    let _processor = new Processor(components);
    _processor.process();
})