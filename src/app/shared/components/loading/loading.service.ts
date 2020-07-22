import { Injectable } from '@angular/core';
import { startWith } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { LoadingType } from './loading-type';

@Injectable({ providedIn: 'root' })
export class LoadingService {

    loadingSubject: Subject<LoadingType> = new Subject<LoadingType>();

    getLoading() {
        return this.loadingSubject
        .asObservable()
        .pipe(startWith(LoadingType.STOPPED));
    }

    start() {
        this.loadingSubject.next(LoadingType.LOADING);
    }

    stop() {
        this.loadingSubject.next(LoadingType.STOPPED);
    }

}
