import {Injectable} from "@angular/core";

@Injectable()
export class GlobalService {
    private pageLoading=true;

    constructor() {}

    setLoading(val) {
        this.pageLoading = val;
    }

    getValue(val) {
        return this.pageLoading;
    }
}
