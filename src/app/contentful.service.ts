import { Injectable } from '@angular/core';
import { createClient, Entry} from 'contentful';
import {HttpClient} from '@angular/common/http'
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private client = createClient({
    space: environment.contentful.spaceId,
    accessToken: environment.contentful.token
  })
  postId: any;
  publishId: any;
  entriesid: string;
  sys: any;
  constructor(private http:HttpClient) { }

  getCourses(query?: object): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
      content_type: 'course'
    }, query))
    .then(res => res.items);
  }

  getCourse(courseId): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
      content_type: 'course'
    }, {'sys.id': courseId}))
    .then(res => res.items[0]);
  }
  
  postdata(){
    const headers = { 'Authorization': 'Bearer 3vI-qfwSwWhuCDWKyCEMST2WEbFMXU7HXLzbvAEPLdo', 
                      "X-Contentful-Content-Type": "course",
                      "Content-Type": "application/vnd.contentful.management.v1+json" };
    const body = 
      {}
    this.http.post<any>('https://api.contentful.com/spaces/cd207etum6zb/entries', 
        body, { headers }).subscribe(data => {
            this.sys = data;
            this.postId = data.sys.id;
            console.log(this.postId);
            this.entriesid = this.postId;
        });
  }

  publishdata(bodyofentry){
    console.log(bodyofentry)
    const headers = { 'Authorization': 'Bearer 3vI-qfwSwWhuCDWKyCEMST2WEbFMXU7HXLzbvAEPLdo', 
                      "x-contentful-skip-transformation": "true",
                      "x-contentful-user-agent": "app contentful.web-app; platform browser; sha eb257439bf97e4499211ad6d151eb8bc25f819d2",
                      "Content-Type": "application/vnd.contentful.management.v1+json" };
    // const body = '{
    //   "fields": {
    //     "title": {
    //       "en-US": bodyofentry.title
    //     },
    //     "slug": {
    //       "en-US": bodyofentry.slug
    //     },
    //     "shortDescription": {
    //       "en-US": bodyofentry.shortDescription
    //     },
    //     "description": {
    //       "en-US": bodyofentry.description
    //     }
    //   },
    //   "sys": this.sys.sys
    // }'
    const body= ''
    this.http.put<any>('https://api.contentful.com/spaces/cd207etum6zb/entries/' + this.entriesid + '/published', 
        body, { headers }).subscribe(data => {
            this.publishId = data;
        });
  }
}
