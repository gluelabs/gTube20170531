/**
 * Represents the model of a single Video resource
 * 
 */


import { ReflectiveInjector } from "@angular/core";
import { DomSanitizer, BrowserModule, SafeUrl } from "@angular/platform-browser";

export class Video {

    categoryId: string;
    channelTitle: string;
    description: string;
    id: string;
    liveBroadcastContent: string;
    publishedAt: Date;
    title: string;
    thumbnailUrl: string;
    statistics: Object;
    url: string;
    safeUrl: SafeUrl;
   
    constructor({
        id,
        title,
        description,
        thumbnailUrl,
        categoryId,
        channelTitle,
        liveBroadcastContent,
        publishedAt,
        statistics
    }) {
        this.id = id;
        this.categoryId = categoryId;
        this.channelTitle = channelTitle;
        this.description = description;
        this.liveBroadcastContent = liveBroadcastContent;
        this.publishedAt = publishedAt;
        this.statistics = statistics;
        this.thumbnailUrl = thumbnailUrl;
        this.title = title;
        this.url = `http://www.youtube.com/embed/${this.id}`;
        //let injector = ReflectiveInjector.resolveAndCreate([BrowserModule]);
        //let ds: DomSanitizer = injector.get(DomSanitizer);
        //console.log('*******DS*****',injector);
        //this.safeUrl = ds.bypassSecurityTrustResourceUrl(this.url);


    };
}
