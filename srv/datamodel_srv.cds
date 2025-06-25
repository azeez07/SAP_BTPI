using DataModel from '../db/DataModel';


service RonaldoCR7Catalog {

entity Amazon_Web_Application as projection on DataModel.Amazon_Web_Application;

entity Booking as projection on DataModel.Booking;

function getValue (
    Value1 : Integer,
    Value2 : Integer,
    Value3 : Integer,
    Operator : String(10)

)
    returns String;
function PostInformation(
    flag : String(1),
    DATA : String
)
returns String;

action PostInfo(
    req_data: array of DataModel.Booking_type00
)
returns DataModel.msg;

function ImportHistory(F:String(1),DATA:String)  returns String;
}
