"use strict";

import { Selector } from 'testcafe';

class AureliaSelector {
    createSelector (bindingDescriptor, selector) {
        const elementSelector = `*[${bindingDescriptor.type}\\.${bindingDescriptor.value}="${bindingDescriptor.model}"]`;

        return selector ? Selector(selector).find(elementSelector)
            : Selector(elementSelector);
    }

    /*valueBind*/

    createBindSelector (type, model, selector) {
        return this.createSelector({
            type:  type,
            value: 'bind',
            model: model
        }, selector);
    }

    byValueBind (model, selector) {
        return this.createBindSelector('value', model, selector);
    }

    byShowBind (model, selector) {
        return this.createBindSelector('show', model, selector);
    }

    byCheckedBind (model, selector) {
        return this.createBindSelector('checked', model, selector);
    }

    byFocusBind (model, selector) {
        return this.createBindSelector('focus', model, selector);
    }

    /*eventDelegate*/

    createDelegateSelector (event, model, selector) {
        return this.createSelector({
            type:  event,
            value: 'delegate',
            model: model
        }, selector);
    }

    byDbClickDelegate (model, selector) {
        return this.createDelegateSelector('dblclick', model, selector);
    }

    byClickDelegate (model, selector) {
        return this.createDelegateSelector('click', model, selector);
    }
}

export default new AureliaSelector();
