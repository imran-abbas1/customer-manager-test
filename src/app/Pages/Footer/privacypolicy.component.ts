import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-privacy',
  template: `<h2>Privacy Policy</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu venenatis purus. Pellentesque consequat arcu justo, ac bibendum nulla fringilla at. Pellentesque sit amet ante et orci rhoncus dictum. Sed feugiat suscipit urna, eget vulputate leo efficitur molestie. Morbi a dui ipsum. Nulla facilisi. Aliquam libero risus, consectetur ut sapien in, dapibus rutrum quam. Praesent cursus eros lectus, sed egestas tortor bibendum aliquet. Integer consectetur arcu ac dolor aliquam egestas. Pellentesque convallis mauris nec dui ultrices, quis eleifend sapien finibus. Curabitur in arcu bibendum, malesuada velit ut, fermentum libero. Fusce non interdum dui. </p>

  <p> Donec a diam quis nibh volutpat volutpat at at nibh. Nulla facilisi. Integer at pharetra turpis. Integer euismod malesuada cursus. Sed vulputate dolor turpis, vel tempor enim laoreet nec. Phasellus nec porta eros. Mauris rutrum nisl non lacus fringilla, eget fringilla odio convallis. Maecenas odio nunc, feugiat tincidunt nisi id, imperdiet lacinia ligula. Quisque pretium varius eleifend. Fusce eu tellus justo. Quisque ut purus id urna porta eleifend euismod a magna. Maecenas et massa urna. Pellentesque fringilla, lacus eget consectetur venenatis, leo nisl blandit dui, in auctor augue nibh sit amet quam. Suspendisse sollicitudin mollis neque. Donec eu tempus tortor. </p>

  <p> Vestibulum finibus laoreet volutpat. Curabitur in tristique orci, sit amet mollis est. Fusce nec enim at erat sagittis molestie eget ac ligula. Etiam maximus quam sed tincidunt blandit. Donec ac tortor est. Proin at enim mi. Vivamus feugiat semper tellus, a dictum orci. In pulvinar orci sit amet aliquet vestibulum. Sed quis efficitur ipsum. Cras a enim sagittis, sollicitudin eros eget, blandit arcu. Mauris euismod elit non aliquet fermentum.</p>

   <p> Sed tempus efficitur accumsan. Phasellus efficitur luctus eros, eget tincidunt mauris ullamcorper vel. Etiam euismod ex ligula, a commodo velit ultricies ac. Nullam suscipit nunc sit amet nulla semper, non sodales enim ultricies. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce gravida ullamcorper euismod. Nam elementum mi in tellus vulputate euismod pretium eget libero. Phasellus faucibus vulputate dolor et posuere. Phasellus interdum velit vel est consectetur lacinia. Integer elit leo, faucibus in ligula eget, fringilla imperdiet urna.</p>

   <p> Aliquam euismod elit eu risus pharetra, at placerat erat tempus. Etiam semper tristique erat sit amet imperdiet. Nullam laoreet enim ut ligula laoreet ornare. Aliquam elit libero, tempor non scelerisque nec, fringilla a lectus. Pellentesque nec ligula accumsan, interdum nunc sed, scelerisque mi. In hac habitasse platea dictumst. Suspendisse potenti. Cras id tristique ligula, nec dapibus nisi. Duis vel ligula nunc. Morbi sodales tincidunt libero, et tristique lorem ullamcorper ac. Donec lacus ex, mollis sed risus non, feugiat pulvinar mi. Donec quis malesuada diam. Aenean porttitor urna est, viverra consequat ipsum imperdiet vel. Donec in tortor ut ipsum vulputate euismod. Maecenas sed condimentum metus, non egestas nulla.
  </p>
  `,
  styles: [`
    h2 {
      text-align: center;
      margin: auto;
      padding: unset;
      margin-top: 100px;
    }
    p {
      margin-left: 60px;
      margin-right: 30px;
      margin-top: 20px;
    }
    /* Responsive columns - one column layout (vertical) on small screens */
    @media screen and (max-width: 600px) {
    p {
      margin-left: 40px;
      margin-right: 40px;
    }
    }
  `]
})

export class PrivacypolicyComponent implements OnInit{
  constructor() {
  }
  ngOnInit(): void {

  }
}
