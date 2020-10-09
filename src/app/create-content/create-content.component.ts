import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  entryForm: FormGroup;
  control: FormControl;
  submitted = false;

  constructor(private router: Router, private formBuilder: FormBuilder, private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      title: ['', Validators.required],
      slug: ['', Validators.required],
      shortDescription: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  get f(){
    return this.entryForm.controls;
  }
  

  goToList(){
    this.router.navigate(['/courses']);
  }

  entry(entry){
    if(this.entryForm.status == 'VALID'){
      this.contentfulService.publishdata(entry);
    }else{
      console.log("NOT VALID")
    }
  }

}
