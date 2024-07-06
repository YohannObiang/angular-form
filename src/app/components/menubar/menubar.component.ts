import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
    selector: 'menubar',
    templateUrl: './menubar.component.html',
    standalone: true,
    imports: [MenubarModule]
})
export class Menubar implements OnInit {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Accueil',
                icon: 'pi pi-home'
            },
            {
                label: 'Apprennants',
                icon: 'pi pi-list'
            },
            // {
            //     label: 'Projects',
            //     icon: 'pi pi-search',
            //     items: [
            //         {
            //             label: 'Components',
            //             icon: 'pi pi-bolt'
            //         },
            //         {
            //             label: 'Blocks',
            //             icon: 'pi pi-server'
            //         },
            //         {
            //             label: 'UI Kit',
            //             icon: 'pi pi-pencil'
            //         },
            //         {
            //             label: 'Templates',
            //             icon: 'pi pi-palette',
            //             items: [
            //                 {
            //                     label: 'Apollo',
            //                     icon: 'pi pi-palette'
            //                 },
            //                 {
            //                     label: 'Ultima',
            //                     icon: 'pi pi-palette'
            //                 }
            //             ]
            //         }
            //     ]
            // },
            {
                label: 'Formateurs',
                icon: 'pi pi-user'
            },
            {
              label: 'Paramètres',
              icon: 'pi pi-cog'
          }
        ]
    }
}