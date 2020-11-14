import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  title = '';
  text = ''; 
  id = 1;
  styleToggle=false

  @Output() addPostUser: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('myInputText',{static: false}) myinputText: ElementRef
  @ViewChild('myInputTitle',{static: false}) myinputTitle: ElementRef
  constructor() { }

  ngOnInit(): void {
  }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
    const post: Post ={
      id: this.id,
      title: this.title,
      text: this.text
    }
    this.addPostUser.emit(post)
    console.log('Add post: ', post)
    this.text = ''
    this.title = ''
    }
    this.id = this.id + 1;
  }
  onLoadDefault () {
    this.styleToggle=!this.styleToggle
    if(this.styleToggle) {
    this.myinputText.nativeElement.style.color = "red"
    this.myinputTitle.nativeElement.style.fontWeight = "bold"
    } else {
    this.myinputText.nativeElement.style.color = 'black'
    this.myinputTitle.nativeElement.style.fontWeight = "normal"
    }
  }
  Searching = ''
  @Output() titleSearch = new EventEmitter<string>()
  filterTitles(change: string) {
    console.log(change)
    this.titleSearch.emit(change)
  }
  @Output() titleBool = new EventEmitter<Boolean>()
  changeFilter(val){
    this.titleBool.emit(val)
  }

}
   
