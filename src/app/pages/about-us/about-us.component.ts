import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.component.html',
  styleUrls: ['about-us.component.css'],
})
export class AboutUs {
  raw5sjv: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('About-us - Travel Agency')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'About-us - Travel Agency',
      },
    ])
  }
}
