import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(post: Post[], filterTitles: string, filterBool: Boolean): Post[] {
    console.log(filterBool, filterTitles)
    if(!filterTitles.trim()) {
      return post
    } else {
      
      if (filterBool){
        return post.filter(item=>{
          return item.title.toLowerCase().includes(filterTitles.toLowerCase())
        })
      }
      return post.filter(item=>{
        return item.text.toLowerCase().includes(filterTitles.toLowerCase())
      })
    }  
  }       
}
