class ProgressBar {

    static {
    }

    constructor () {
        this.progressContainer = $('.progress__container');
        this.valueSelector = $('.progress__container-bar');
        this.barSelector = $('.progress__container-bar');
    }


    set value(value) {
        this.value = value;
    }

    get value() {
        return this.value;
    }

    getAttributeValue() {
        if (this.progressContainer) {
            let value = this.progressContainer.attr('data-value');
            if (value) {
                return value
            } 
            return 0; 
        }
        return 0;
    }

    setText() {
        
    }

    build() {
        return `
                        <div class="progress__container" data-value="${value}">
                            <div class="progress__container-value progress__container--1">${value}</div>
                            <div class="progress__container-bar progress__container--1"></div>
                            <div class="progress__container-text progress__container--1">
                                <i class="fa fa-font" aria-hidden="true"></i>
                                <span>Typography</span>
                            </div>
                        </div>
        `   
    }
}

export {ProgressBar}