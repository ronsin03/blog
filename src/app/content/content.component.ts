import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  courses: Entry<any>[] = [];

  constructor(private router: Router, private contentfulServices: ContentfulService) { }

  ngOnInit() {
    this.contentfulServices.getCourses()
      .then(courses => this.courses = courses)

    // this.contentfulServices.postdata();
  }

  goToCourseDetailPage(courseId){
    this.router.navigate(['/courses', courseId])
  }

}
