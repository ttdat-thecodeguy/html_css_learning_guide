class Processor {

    constructor (components) {
        this.components = components;
    }

    process () {
        let keys = Object.keys(this.components);

        for (let idx = 0;  idx < keys.length; idx++ ) {
            let _c_arr = $(`${keys[idx]}`);
            if (_c_arr.length > 0) {
                let _ClassComponent = this.components[keys[idx]]; 

                if (typeof _ClassComponent !== 'function') {
                    throw new Error('typeof class');
                }

                for (let ydx = 0;  ydx < _c_arr.length; ydx++) {
                    let _class = new _ClassComponent();
                    
                    let content = _class.build();
                    $(`${keys[idx]}`).eq(ydx).html(content);
                }

            }
        }
    }
}

export {Processor};