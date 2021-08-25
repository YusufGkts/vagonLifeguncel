import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  allReviews = [
    {
      image: "assets/images/avatar/1.jpg",
      user: "Glee Smiley",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/2.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/3.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/4.jpg",
      user: "Glee Smiley",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/5.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/6.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    
  ];
  
  
  publishReviews = [
    {
      image: "assets/images/avatar/4.jpg",
      user: "Glee Smiley",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/5.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/6.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
  ];
  
  deletedReviews = [
    {
      image: "assets/images/avatar/5.jpg",
      user: "Louis Jovanny",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
    {
      image: "assets/images/avatar/6.jpg",
      user: "Cindy Hawkins",
      date: "Sunday, 24 July 2020 04:55 PM",
      event_name: "The Story of Danau Toba (Musical Drama)",
      description: "Karciz is one of the best vendors we've ever worked with. Thanks for your wonderful, helpful service across the board. It is greatly appreciated!",
      rating: "4.2",
      ratings_class: [
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-orange",
        },
        {
          icon_class:"fa fa-star fs-16 text-gray",
        }
      ]
    },
  ];
  
  
}
