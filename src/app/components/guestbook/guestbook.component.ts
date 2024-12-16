import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-guestbook',
  imports: [RouterOutlet],
  templateUrl: './guestbook.component.html' ,
  styleUrl: './guestbook.component.css'
})
export class GuestbookComponent {
  
  signInWithGitHub(){
    const clientId = 'Ov23lit4ewPicQCxegA8';
    const redirectUri ='https://mananrai.com.np/guestbook-form';

    window.location.href = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}`;

  }

}
