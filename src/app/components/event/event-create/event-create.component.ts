import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../../services/events.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  eventForm: FormGroup;

  constructor(private _eventService: EventsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm() {
    this.eventForm = this._form.group({
      eventTitle: new FormControl,
      typeOfEvent: new FormControl,
      information: new FormControl,
      location: new FormControl,
      startTime: new FormControl,
      price: new FormControl,
      isAssigned: new FormControl,
      isCompleted: new FormControl,
      isPaid: new FormControl,
      isExpired: new FormControl
    });
  }

  onSubmit() {
    console.log(this.eventForm.value)
    if (this.eventForm.value.isAssigned == null){this.eventForm.value.isAssigned = false}
    if (this.eventForm.value.isCompleted == null){this.eventForm.value.isCompleted = false}
    if (this.eventForm.value.isPaid == null){this.eventForm.value.isPaid = false}
    if (this.eventForm.value.isExpired == null){this.eventForm.value.isExpired = false}
    this._eventService.createEvent(this.eventForm.value).subscribe(data => {
      this._router.navigate(['/events']);
    });
  }

}
