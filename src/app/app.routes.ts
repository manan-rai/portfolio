import { RouterModule, Routes, withHashLocation } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BlogComponent } from './components/blog/blog.component';
import { GuestbookComponent } from './components/guestbook/guestbook.component';
import { FormComponent } from './components/form/form.component';
import { EzoneComponent } from './components/company/ezone/ezone.component';
import { MediflowComponent } from './components/company/mediflow/mediflow.component';

export const routes: Routes = [
    {
        path: "", component: AboutComponent
    },
    {
        path: "experience",
        component: ExperienceComponent,
    },
    {
        path: "experience/ezone",
        component: EzoneComponent,
    },
    {
        path: "experience/mediflow",
        component: MediflowComponent
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

