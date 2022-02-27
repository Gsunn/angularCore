import { DOCUMENT } from '@angular/common';

import { Inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FullScreenService {

    fullScreen: any;

    constructor(@Inject(DOCUMENT) private document: Document | any) {
        this.fullScreen = document.documentElement;
    }

    public togle() {
        if (!this.isFullScreen()) this.openFullscreen()
        else this.closeFullscreen()
    }

    private isFullScreen(): boolean {
        const fsDoc = <any>document;
        return !!(fsDoc.fullscreenElement || fsDoc.mozFullScreenElement || fsDoc.webkitFullscreenElement || fsDoc.msFullscreenElement);
    }

    private openFullscreen() {
        if (this.fullScreen.requestFullscreen) {
            this.fullScreen.requestFullscreen();
        } else if (this.fullScreen.mozRequestFullScreen) {
            /* Firefox */
            this.fullScreen.mozRequestFullScreen();
        } else if (this.fullScreen.webkitRequestFullscreen) {
            /* Chrome, Safari and Opera */
            this.fullScreen.webkitRequestFullscreen();
        } else if (this.fullScreen.msRequestFullscreen) {
            /* IE/Edge */
            this.fullScreen.msRequestFullscreen();
        }
    }

    private closeFullscreen() {
        if (this.document.exitFullscreen) {
            this.document.exitFullscreen();
        } else if (this.document.mozCancelFullScreen) {
            /* Firefox */
            this.document.mozCancelFullScreen();
        } else if (this.document.webkitExitFullscreen) {
            /* Chrome, Safari and Opera */
            this.document.webkitExitFullscreen();
        } else if (this.document.msExitFullscreen) {
            /* IE/Edge */
            this.document.msExitFullscreen();
        }
    }

}