import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  course: Entry<any>;
  constructor(private route:ActivatedRoute, private router: Router, private contentfulServices: ContentfulService) { }

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    this.contentfulServices.getCourse(courseId)
      .then((course)=>{
        this.course = course;
      });
  }

  goToList(){
    this.router.navigate(['/courses']);
  }

}
