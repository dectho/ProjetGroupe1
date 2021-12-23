import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {EventData} from "./event-data";
import {EventType} from "./event-type";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private _eventBus: BehaviorSubject<EventData> = new BehaviorSubject<EventData>({
    type : EventType.INIT,
    data : null
  });

  constructor() { }

  when(eventType: EventType): Observable<any> {
    //Sans le asObservable on revoit un subject, ici un observable donc il ne peut qu'être écouté
    return this._eventBus.asObservable().pipe(
      filter(event => event.type === eventType),
      map(event => event.data)
    );
  }

  next(event:EventData) {
    this._eventBus.next(event);
  }
}
