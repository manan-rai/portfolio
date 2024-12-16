import { RouterModule, Routes, withHashLocation  } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BlogComponent } from './components/blog/blog.component';
import { GuestbookComponent } from './components/guestbook/guestbook.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: "", component: AboutComponent
    },
    {
        path: "experience", component: ExperienceComponent
    },
    {
        path: "blog", component: BlogComponent
    },
    {
        path: "guestbook", component: GuestbookComponent
          
    },
    {
        path: 'guestbook-form', component: FormComponent
    },
    {
        path: "about", component: AboutComponent
    },
];

