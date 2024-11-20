import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { LoginService } from '../../../service/login-service.service';

@Component({
  selector: 'app-barramenu',
  standalone: true,
  imports: [MdbCollapseModule, RouterLink],
  templateUrl: './barramenu.component.html',
  styleUrl: './barramenu.component.scss'
})
export class BarramenuComponent {

  permissao = inject(LoginService)


}
