import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module'
import { AboutUs } from './about-us.component'

const routes = [
  {
    path: '',
    component: AboutUs,
  },
]

@NgModule({
  declarations: [AboutUs],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [AboutUs],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutUsModule {}
