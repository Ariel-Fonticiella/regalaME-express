import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { GiftedApiService, Gifted } from '../services/gifted-api.service';
import { UserApiService } from '../services/user-api.service';


import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';


const colors: any = {
  red: {
  primary: '#ad2121',
  secondary: '#FAE3E3'
  },

  blue: {
  primary: '#1e90ff',
  secondary: '#D1E8FF'
  },

  yellow: {
  primary: '#e3bc08',
  secondary: '#FDF1BA'
  }
};

@Component({
    selector: 'app-profile',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./profile.component.scss'],
    templateUrl: './profile.component.html'
})

export class ProfileComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

    view: string = 'month';

    viewDate = new Date();

    modalData: {
      action: string;
      event: CalendarEvent;
      gifted?: Gifted;
    };

    actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },

    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];
  gifted: Gifted[] = [];

  activeDayIsOpen: boolean = true;

  constructor(
    private giftedThang: GiftedApiService,
    private modal: NgbModal,
    public userThang: UserApiService,
    private routerThang: Router
  ) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    //take the event parameter
    // filter for it in my gifted results (title === name)
    //router.navigate(filteredGiftedResults.id)

    this.modalData = { event, action };

    this.gifted.forEach((oneGifted) => {
        if (oneGifted.event === event) {
            this.modalData.gifted = oneGifted;
        }
    });

    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }


  ngOnInit() {

    this.giftedThang.getGifted()
      .then((giftedResults: Gifted[]) => {
        this.gifted = giftedResults;

        const newEvents = [];
//gifted results is my results from DB
        giftedResults.forEach ((oneGifted) => {
          const calendarEvent = {
            start: new Date(oneGifted.birthday),
            title: oneGifted.name,
            color: colors.yellow
          };
          calendarEvent.start.setFullYear(new Date().getFullYear());
          newEvents.push(calendarEvent);
          oneGifted.event = calendarEvent;
        });

        this.events = newEvents;
        this.refresh.next();

      })
      .catch((err) => {
          alert("Sorry! Something went wrong.");
          console.log("Calendar event add Error");
          console.log(err);
      });

  }// ngOnInit()
}
