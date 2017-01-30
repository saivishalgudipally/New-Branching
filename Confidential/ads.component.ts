import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { CommonService } from '../Shared/serviceConnection';

@Component({
    selector: 'ads',
    template: `<div class="page-headerr"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ads </div>
                            <div class="page-body bg-transparent">
                                <div class="d3"> <img src="assets/images/sample-ads.png"> </div>
                            </div>`,
    providers: [CommonService]
})
export class AdvertisementsComponent{
     constructor(private router: Router, private _service: CommonService) {

     }
 }