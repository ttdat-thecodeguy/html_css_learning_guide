class MultiSelect {
    constructor (tags) {
        this.isSelectContainerOpen = false;
        this.mainTags = $("#mainTags");

        $("#inputSearch").click(function() {
            if (!isSelectContainerOpen) {
                openSelect();
            }
        })
    
        $("#multiSelectContainer").focusout(function() {
            if (isSelectContainerOpen) {
                closeSelect();
            }
        })
    }

    _openSelect() {
        mainTags.show();
        isSelectContainerOpen = true;
    }

    _closeSelect() {
        mainTags.hide();
        isSelectContainerOpen = false;
    }
}
export {MultiSelect}