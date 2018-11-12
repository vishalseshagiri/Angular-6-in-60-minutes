import { Component, OnInit } from '@angular/core';
import { Capability } from 'protractor';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  age: number;
  address: Address;
  hobbies: string[];
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.name = 'Vishal Seshagiri';
    this.age = 30;
    this.address = {
      street: '721W, 30th Street',
      city: 'Los Angeles',
      state: 'Calfornia'
    };
    this.email = 'vishaljsesh@gmail.com';
    this.hobbies = ['Write code', 'watch movies', 'Listen to music'];

    this.dataService.getPosts().subscribe((posts) => {
      // console.log(posts);
      this.posts = posts;
    });
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
