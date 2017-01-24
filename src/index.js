import { Selector } from 'testcafe';

class AureliaSelector {
    createSelector (bindingDescriptor, selectorInit) {
        const elementSelector = `*[${bindingDescriptor.type}\\.${bindingDescriptor.value}="${bindingDescriptor.model}"]`;

        return selectorInit ? Selector(selectorInit).find(elementSelector)
            : Selector(elementSelector);
    }

    /*valueBind*/

    createBindSelector (type, model, selectorInit) {
        return this.createSelector({
            type:  type,
            value: 'bind',
            model: model
        }, selectorInit);
    }

    byValueBind (model, parentSelector) {
        return this.createBindSelector('value', model, parentSelector);
    }

    byShowBind (model, parentSelector) {
        return this.createBindSelector('show', model, parentSelector);
    }

    byCheckedBind (model, parentSelector) {
        return this.createBindSelector('checked', model, parentSelector);
    }

    byFocusBind (model, parentSelector) {
        return this.createBindSelector('focus', model, parentSelector);
    }

    /*eventDelegate*/

    createDelegateSelector (event, model, selectorInit) {
        return this.createSelector({
            type:  event,
            value: 'delegate',
            model: model
        }, selectorInit);
    }

    byDbClickDelegate (model, parentSelector) {
        return this.createDelegateSelector('dblclick', model, parentSelector);
    }

    byClickDelegate (model, parentSelector) {
        return this.createDelegateSelector('click', model, parentSelector);
    }
}

export default new AureliaSelector();
