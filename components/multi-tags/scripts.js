import { MultiSelect } from "./MultiSelect.js";

$(document).ready(function() {
    let tags = [];
    let selects = [
        {
            id: 1,
            tag: "Html"
        },
        {
            id: 2,
            tag: "Css"
        }
    ];
    new MultiSelect(tags, selects);

    
});