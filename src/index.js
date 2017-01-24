import { Selector } from 'testcafe';

class AureliaSelector {
    createSelector (bindingDescriptor, selectorInit) {
        const elementSelector = `*[${bindingDescriptor.type}\\.${bindingDescriptor.command}="${bindingDescriptor.expression}"]`;

        return selectorInit ? Selector(selectorInit).find(elementSelector)
            : Selector(elementSelector);
    }

    /*valueBind*/

    createBindSelector (type, expression, selectorInit) {
        return this.createSelector({
            type:       type,
            command:    'bind',
            expression: expression
        }, selectorInit);
    }

    byValueBind (expression, parentSelector) {
        return this.createBindSelector('value', expression, parentSelector);
    }

    byShowBind (expression, parentSelector) {
        return this.createBindSelector('show', expression, parentSelector);
    }

    byCheckedBind (expression, parentSelector) {
        return this.createBindSelector('checked', expression, parentSelector);
    }

    byFocusBind (expression, parentSelector) {
        return this.createBindSelector('focus', expression, parentSelector);
    }

    /*eventDelegate*/

    createDelegateSelector (event, expression, selectorInit) {
        return this.createSelector({
            type:       event,
            command:    'delegate',
            expression: expression
        }, selectorInit);
    }

    byDbClickDelegate (expression, parentSelector) {
        return this.createDelegateSelector('dblclick', expression, parentSelector);
    }

    byClickDelegate (expression, parentSelector) {
        return this.createDelegateSelector('click', expression, parentSelector);
    }
}

export default new AureliaSelector();
