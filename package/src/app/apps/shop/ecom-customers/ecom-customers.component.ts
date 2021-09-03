import { Component, OnInit } from '@angular/core';

export interface user {
  user_id?: string;
  join_date: string;
  user_name: string;
  location: string;
  user_phone: number;
  user_mail: string;
  isSelected: boolean;
}

export const USERS: user[] = [
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 1242314324,
    user_mail: 'asdjas@gmail.com',
    isSelected: false,
  },
  {
    user_id: '2',
    join_date: '21/11/2017',
    user_name: 'Ahmet Mehmet',
    location: 'Beşiktaş/İstanbul',
    user_phone: 52345252,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#3',
    join_date: '21/11/2017',
    user_name: 'Ali Veli',
    location: 'Medan Indonesia',
    user_phone: 36463734634,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#4',
    join_date: '21/11/2017',
    user_name: 'Ömer Odabaş',
    location: 'Medan Indonesia',
    user_phone: 34525423632,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#5',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Furkan Yaprak',
    user_phone: 2354235234234,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#6',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#7',
    join_date: '21/11/2017',
    user_name: 'Yusuf Göktaş',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#8',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
  {
    user_id: '#1',
    join_date: '21/11/2017',
    user_name: 'Cive Saluve',
    location: 'Medan Indonesia',
    user_phone: 5061805451,
    isSelected: false,
    user_mail: 'asdjas@gmail.com',
  },
];

@Component({
  selector: 'app-ecom-customers',
  templateUrl: './ecom-customers.component.html',
  styleUrls: ['./ecom-customers.component.css'],
})
export class EcomCustomersComponent implements OnInit {
  usersData: user[];
  searchKey: string;

  constructor() {
    this.users = USERS;
    this.usersData = this.users;
  }

  ngOnInit(): void {}

  page = 1;
  pageSize = 1000000;
  collectionSize = USERS.length;
  users: user[];

  onKey(event) {
    if (!this.searchKey) {
      this.usersData = this.users;
    } else {
      this.usersData = this.users.filter((x) => {
        return (
          x.user_id
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase()) ||
          x.user_mail
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase()) ||
          x.user_name
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase()) ||
          x.location
            .toLocaleLowerCase()
            .match(this.searchKey.toLocaleLowerCase())
        );
      });
    }
  }

  // checkUncheckAll(event: any) {
  //   var checkboxes = document.getElementsByTagName('input');
  //   if (event.target.checked) {
  //     for (var i = 0; i < checkboxes.length; i++) {
  //       if (checkboxes[i].type == 'checkbox') {
  //         checkboxes[i].checked = true;
  //       }
  //     }
  //   } else {
  //     for (var i = 0; i < checkboxes.length; i++) {
  //       // console.log(i)
  //       if (checkboxes[i].type == 'checkbox') {
  //         checkboxes[i].checked = false;
  //       }
  //     }
  //   }
  // }
}
