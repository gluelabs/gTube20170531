import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import { VideoList } from "app/models/video-list.model";
import { Video } from "app/models/video.model";

@Injectable()
export class YoutubeService {
  fakeVideos: Array<any> = [
    { id: 1, title: "titolo del video", description: "Descrizione" }
  ];

  ENV: any;
  BASE_API: string;
  API_KEY: string;
  constructor(
    private http: Http
  ) {
    this.ENV = environment;
    this.BASE_API = this.ENV.YT_BASE;
    this.API_KEY = this.ENV.API_KEY;
  }

  getFakeVideos(): Promise<Array<any>> {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            //Decido di risolvere la promise
            resolve(this.fakeVideos);
          },
          3000
        );

      }
    );
  }


  trending(next: string = null): Observable<any> {
    let params: string = [
      `chart=mostPopular`,
      `regionCode=IT`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=10`,
      `type=video`,
      `key=${this.API_KEY}`
    ].join('&');
    if (next) {
      params += `&pageToken=${next}`;
    }
    return this.fetchVideo(params);
  }


  getVideos(videoId: string, results = 1): Observable<VideoList> {
    const params: string = [
      `id=${videoId}`,
      `part=snippet,contentDetails,statistics`,
      `maxResults=${results}`,
      `key=${this.API_KEY}`
    ].join('&');
    return this.fetchVideo(params);
  }
  getVideo(videoId: string): Observable<Video> {
    return this.getVideos(videoId)
      .map((r) => r.items[0]).delay(500);
  }


  /**
     * Get related videos
     * 
     */
  related(videoId: string): Observable<VideoList> {
    const params: string = [
      `part=snippet`,
      `type=video`,
      `key=${this.API_KEY}`,
      `relatedToVideoId=${videoId}`,
      `maxResults=20`
    ].join('&');
    return this.http.get(`${this.BASE_API}/search?${params}`)
      .map((res: Response) => res.json())
      .map((res) => new VideoList(res));
  }


  /**
   * Get video's comments
   *  Replies and snippet have quota cost = 2
   */
  getComments(id, token = null, replies = false): Observable<Array<any>> {
    let params: string = [
      `videoId=${id}`,
      `maxResults=10`,
      `order=relevance`,
      `textFormat=plainText`,
      `key=${this.API_KEY}`
    ].join('&');
    if (token) {
      params += `&pageToken=${token}`;
    }
    params += `&part=snippet`;
    if (replies) {
      params += `,replies`;
    }
    return this.http.get(`${this.BASE_API}/commentThreads?${params}`)
      .map((res: Response) => res.json())
      .map((res) => res.items.map(
        (item) => {
          const comment = item.snippet.topLevelComment;
          return {
            id: comment.id,
            authorChannelId: comment.snippet.authorChannelId.value,
            authorChannelUrl: comment.snippet.authorChannelUrl,
            authorDisplayName: comment.snippet.authorDisplayName,
            authorProfileImageUrl: comment.snippet.authorProfileImageUrl,
            textDisplay: comment.snippet.textDisplay,
            totalReplyCount: comment.snippet.totalReplyCount,
            publishedAt: comment.snippet.publishedAt,
            replies: comment.replies ? comment.replies.comments : [],
            nextPage: res.nextPageToken
          };
        }
      ));
  }




  fetchVideo(params: string): Observable<any> {
    return this.http.get(`${this.BASE_API}/videos?${params}`)
      .map((res: Response) => res.json())
      .map((res) => new VideoList(res)).delay(500);
    //((.catch(this.handleError);
  }

  private handleError(res: Response): Observable<any> {
    console.error("Abbiamo un errore nella risposta!");
    console.log(res);
    return Observable.throw(res);
  }

  fakeSalvaUtente(utente): Observable<{ 'success': boolean }> {
    return this.http.get('http://labs.glue-labs.com/response.json')
    .map((res: Response)=>{
      let r = res.json();
      return r;
    })
  }





}
