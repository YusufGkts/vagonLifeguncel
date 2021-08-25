import { Component, OnInit } from '@angular/core';

interface Customer {
  cust_id?: string;
  join_date: string;
  customer_name: string;
  ticket_ordered: string;
  location: string;
  last_order: string;
  total_spent: string;
  isSelected: boolean;
}


const CUSTOMERS: Customer[] = [
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Cive Saluve",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,200",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Bella Simatupang",
			ticket_ordered: "The Powerfull Concert Festival London 2020",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$7,300",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Andrew Stevano",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,500",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Olivia Brownlee",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$4,500",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "James Roberto",
			ticket_ordered: "Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,700",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Kevin Hurt",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,700",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Sanuel Jakson",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$3,200",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Cive Saluve",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$100",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Sanuel Jakson",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,300",
			isSelected:false
		  },
		  {
			cust_id: "#0012451",
			join_date: '21/11/2017',
			customer_name: "Cive Slauw",
			ticket_ordered: "The Story Of Danaou Taba (Musical Drama)",
			location: "Medan Indonesia",
			last_order: "04/08/2020 12:34 AM",
			total_spent: "$1,300",
			isSelected:false
		  },
  ];

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


	checkedCustomerList:any;
	
    isMasterSel:boolean;
    checkSingleItem:boolean=true;

  constructor() {
		
		this.isMasterSel = false;
		
		this.updateCustomerListing();
		
		this.getCheckedItemList();
  }

  ngOnInit(): void {
  }
    
    
  page = 1;
  pageSize = 10;
  collectionSize = CUSTOMERS.length;
  customers: Customer[];
  
  updateCustomerListing() {
    this.customers = CUSTOMERS
      .map((customer, i) => ({id: i + 1, ...customer}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
  
  
 /* Check Uncheck all checkbox on main check box click*/
 
 checkUncheckAll() {
    for (var i = 0; i < this.customers.length; i++) {
      this.customers[i].isSelected = this.isMasterSel;
    }
    this.getCheckedItemList();
  }
   
  isAllSelected() {
    this.isMasterSel = this.customers.every(function(item:any) {
        return item.isSelected == true;
      })
    this.getCheckedItemList();
  }
 
  getCheckedItemList(){
    this.checkedCustomerList = [];
	
    for (var i = 0; i < this.customers.length; i++) {
      if(this.customers[i].isSelected)
      this.checkedCustomerList.push(this.customers[i]);
	  else 
	  this.checkSingleItem = false
    }
	
	if(this.checkSingleItem) {
	this.isMasterSel = true;
	}
    this.checkedCustomerList = JSON.stringify(this.checkedCustomerList);
  }
    
    

}
