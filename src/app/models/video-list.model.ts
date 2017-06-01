import {Video} from './video.model';

export class VideoList {
    items: Array<Video> = [];
    nextToken: string;
    totalResults: number;
    
    constructor(resource: any) {
        this.nextToken = resource.nextPageToken || '';
        this.totalResults = resource.pageInfo.totalResults;
        this.items = this.decodeList(resource.items);
    }
    push(newVideos:Array<Video>,newToken:string){
        this.nextToken = newToken;
        this.items.push.apply(this.items,newVideos);
    }

    decodeList(items) {
        
        // The map() method creates a new array with the results
        // of calling a provided function on every element in 
        // this array.
        return items.map(
            (item) => new Video({
                id: item.id.videoId || item.id,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnailUrl: item.snippet.thumbnails.high.url,
                categoryId: item.snippet.categoryId,
                channelTitle: item.snippet.channelTitle,
                liveBroadcastContent: item.snippet.liveBroadcastContent,
                publishedAt: item.snippet.publishedAt,
                statistics: item.statistics
            })
        );
    }
}
