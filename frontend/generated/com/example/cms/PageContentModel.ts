import { _getPropertyModel as _getPropertyModel_1, BooleanModel as BooleanModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type PageContent_1 from "./PageContent.js";
class PageContentModel<T extends PageContent_1 = PageContent_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(PageContentModel);
    get base64Image(): StringModel_1 {
        return this[_getPropertyModel_1]("base64Image", (parent, key) => new StringModel_1(parent, key, true));
    }
    get createdAt(): StringModel_1 {
        return this[_getPropertyModel_1]("createdAt", (parent, key) => new StringModel_1(parent, key, true));
    }
    get htmlContent(): StringModel_1 {
        return this[_getPropertyModel_1]("htmlContent", (parent, key) => new StringModel_1(parent, key, true));
    }
    get prompt(): StringModel_1 {
        return this[_getPropertyModel_1]("prompt", (parent, key) => new StringModel_1(parent, key, true));
    }
    get published(): BooleanModel_1 {
        return this[_getPropertyModel_1]("published", (parent, key) => new BooleanModel_1(parent, key, false));
    }
    get slug(): StringModel_1 {
        return this[_getPropertyModel_1]("slug", (parent, key) => new StringModel_1(parent, key, true));
    }
    get title(): StringModel_1 {
        return this[_getPropertyModel_1]("title", (parent, key) => new StringModel_1(parent, key, true));
    }
}
export default PageContentModel;
