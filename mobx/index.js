import { observable } from "mobx";

class RootStore{
    // es7 decoration Object.defineProperty
    @observable
    name = "test date: Hello World";
}

export default new RootStore();