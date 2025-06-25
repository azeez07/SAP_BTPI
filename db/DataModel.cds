context DataModel {
    entity Amazon_Web_Application {
        key Grocery     : String(20);
            Mobiles     : String(20);
            Home        : String(20);
            Gadgets     : String(20);
            Appliances  : String(20);
            Fashion     : String(20);
            Food        : String(20);
            Electronics : String(20);
  
    }
    entity Booking {
        key Product_Name          : String(20);
            Product_Company_Name  : String(20);
            Product_Color         : String(20);
            Product_Size          : Integer;
            Product_Quality       : Integer;
            Product_Qty           : Integer;
            Delivery_Address      : String(100);
            Customer_PhoneNumber  : Integer;
            Customer_EmailAddress : String(20);
            Delivery_Chargers     : Boolean;
            Payment_Mode          : String(20);


    }
    type Booking_type00 {
         Product_Name          : String(20);
            Product_Company_Name  : String(20);
            Product_Color         : String(20);
            Product_Size          : Integer;
            Product_Quality       : Integer;
            Product_Qty           : Integer;
            Delivery_Address      : String(100);
            Customer_PhoneNumber  : Integer;
            Customer_EmailAddress : String(20);
            Delivery_Chargers     : Boolean;
            Payment_Mode          : String(20);
    }
    type Booking_type {
         Product_Name          : String(20);
            Product_Company_Name  : String(20);
            Product_Color         : String(20);
            Product_Size          : Integer;
            Product_Quality       : Integer;
            Product_Qty           : Integer;
            Delivery_Address      : String(100);
            Customer_PhoneNumber  : Integer;
            Customer_EmailAddress : String(20);
            Delivery_Chargers     : Boolean;
            Payment_Mode          : String(20);
    }

    type msg{
        MSG:String;
    }
}

entity LOG_TABLE {
    key LOG_ID:String;
    LOG_NAME:String(20);
    SERVICE_NAME:String(20);
}

@cds.persistence.exists
@cds.persistence.table
entity VIEW_{
     key PRODUCT_NAME          : String(20);
            PRODUCT_COMPANY_NAME  : String(20);
            PRODUCT_QUALITY       : Integer;
}
