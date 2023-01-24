class MultiSelect {
    constructor (tags, selects) {
        this.tags = tags;
        this.selects = selects;
        this.isSelectContainerOpen = false;
        
        this.tagLeft = $("#tagLeft");
        this.mainTags = $("#mainTags");
        this.tags_container = $("#tags");
        this.inputSearch = $("#inputSearch");
        this.mainContainerTags = $("#mainContainerTags");
        

        const _this = this;
        //build tags if have
        this.buildTags();
        // build select
        this.buildSelects();
        // build tags left
        this.buildTagLeft();


        this.inputSearch.on({
            click: () => {
                if (!_this.isSelectContainerOpen) {
                    _this.openSelect();
                }
            },
            input: e => {
                let val = _this.inputSearch.val();
                if (val) {
                    let find_list = _this.selects.filter(item => {
                        return item.tag.toLowerCase().includes(val.toLowerCase());
                    });
                    _this.buildSelects(find_list);
                } else {
                    _this.buildSelects();
                }
            }
        });


        $(document).on('click', "#deleteItem", function() {
            let data_id = $(this).parent().attr("data-id");
            _this.deleteTag(data_id);
        })

        $(document).mouseup(function (e) {
            let container = $("#multiSelectContainer");
            if (!container.is(e.target) && container.has(e.target).length === 0) 
            {
                if (_this.isSelectContainerOpen) {
                    _this.closeSelect();
                }
            }
        })

       

        $(document).on( 'click', '#selectItem', function () { 
            let data_value = $(this).attr("data-value");
            let data_id = $(this).attr("data-id");
            let idx = _this.tags.findIndex(item => item.key === data_id);
            let checkbox = $(`#selectItem[data-id=${data_id}] > input[type=checkbox]`);
            if (idx === -1) {
                _this.appendNewTag(data_value, data_id);     
                _this.tags.push({ 
                    key: data_id,
                    value: data_value
                 })     
                 _this.buildTagLeft();
                 
                 if (checkbox) {
                    checkbox.prop("checked" , true);
                 }
            } else {
                _this.deleteTag(data_id, idx, checkbox);
            }
         });
    }

    deleteTag(data_id, idx = -1, checkbox = null) {
        let tag = $(`.tag[data-id=${data_id}]`);
        if (idx === -1) {
            idx = this.tags.findIndex(item => item.key === data_id);
        } 
        if (checkbox === null) {
             checkbox = $(`#selectItem[data-id=${data_id}] > input[type=checkbox]`);
        }
                if (tag) {
                    this.tags = [...this.tags.slice(0, idx), ...this.tags.slice(idx + 1)]
                    tag.remove();
                    this.buildTagLeft();
                    if (checkbox) {
                        checkbox.prop("checked" , false);
                     }
                }
    }

    openSelect() {
        this.mainTags.show();
        this.isSelectContainerOpen = true;
    }

    buildTags(tags) {}

    appendNewTag(tag, id) {
        $(this.buildNewTag(tag, id)).insertBefore(this.inputSearch)
    }

    buildTagLeft() {
        return this.tagLeft.html(this.tags.length);
    }

    buildNewTag(text, id) {
       return`<div class="tag" data-value="${text}" data-id="${id}">
                <span>${text}</span>
                <i class="fa fa-times"  id="deleteItem" aria-hidden="true"></i>
        </div>`
    }

    buildSelects(selects = this.selects) {
        let html = ``;
        if (selects && selects.length > 0) {
            for (let item of selects) {
                html += this.buildNewSelectItem(item.tag, item.id);
             }
        } else {
            html += `<span id="notFound">No Tags Found</span>`
        }
        this.mainContainerTags.html(html)
    }

    buildNewSelectItem(selectedText, selectId) {
        return `
                <div class="select-item" id="selectItem" data-value="${selectedText}" data-id="${selectId}" data-selected="false">
                    <input type="checkbox" class="cbSelectItem" />
                    <label>${selectedText}</label>
                </div>
        `;
    }

    closeSelect() {
        this.mainTags.hide();
        this.isSelectContainerOpen = false;
    }

    selectedItem () {}
}
export {MultiSelect}