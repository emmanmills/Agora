import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

import {
    DialogsServiceStub
} from '../../testing';

import { BPDialogComponent } from './bp-dialog.component';

import { DialogsService } from '../services';

import { Dialog } from 'primeng/dialog';

import { MockComponent } from 'ng-mocks';

describe('Component: BPDialog', () => {
    let component: BPDialogComponent;
    let fixture: ComponentFixture<BPDialogComponent>;
    let dialogsService: DialogsServiceStub;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BPDialogComponent,
                MockComponent(Dialog)
            ],
            // The NO_ERRORS_SCHEMA tells the Angular compiler to ignore unrecognized
            // elements and attributes
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: DialogsService, useValue: new DialogsServiceStub() }
            ]
        })
        .compileComponents();

        fixture = TestBed.createComponent(BPDialogComponent);

        // Get the injected instances
        dialogsService = fixture.debugElement.injector.get(DialogsService);

        component = fixture.componentInstance; // Component test instance
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a dialog element', () => {
        const el = fixture.debugElement.query(By.css('p-dialog'));
        expect(el).toBeDefined();

        const aEl = fixture.debugElement.queryAll(By.css('p-dialog'));
        expect(aEl.length).toEqual(1);
    });
});
