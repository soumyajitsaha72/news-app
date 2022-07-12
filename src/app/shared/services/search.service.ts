import { EventEmitter, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SeachService {
    searchText = new EventEmitter<string>();
}