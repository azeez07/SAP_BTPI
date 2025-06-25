const cds = require('@sap/cds');
const req = require('express/lib/request');
const { isNumberObject } = require('util/types');

module.exports = async srv => {
    srv.before(['CREATE'], 'Amazon_Web_Application' , async(req,res) =>{
        try {
            let ReqData = req.data;
            if(ReqData.Grocery == "test" || 
                ReqData.Grocery =="" ||
                ReqData.Mobiles === "test" ||
                ReqData.Mobiles === "" ||
                ReqData.Home === "test" ||
                ReqData.Home === "")
            {
                req.reject(401, "Invalid Grocery or Mobile value.")
            }
        }
        catch(error){
            console.log(error)
        }
    })
    srv.before(['CREATE'], 'Booking', async (req) => {
        try {
            const ReqData = req.data;

            if (ReqData.Product_Name === "test" || ReqData.Product_Name === "") {
                return req.reject(400, "You have entered an invalid Product Name.");
            }

            if (ReqData.Product_Company_Name === "test" || ReqData.Product_Company_Name === "") {
                return req.reject(400, "You have entered an invalid Product Company Name.");
            }

            if (ReqData.Product_Color === "test" || ReqData.Product_Color === "") {
                return req.reject(400, "You have entered an invalid Product Color.");
            }
        } catch (error) {
            console.error("Error in Booking validation:", error);
            req.reject(500, "Internal Server Error");
        }
    })
    srv.on('getValue', async(req,res)=>{
        try {
            let {Value1,Value2,Value3,Operator} = req.data;
            if (Operator == 'add'){
                let results = Value1 + Value2 + Value3;
                console.log(results)
                return {
                    va:results
                }
            }
            if (Operator == 'multiple'){
                let results = Value1 * Value2 * Value3;
                return results
            }
        } catch (error) {
            console.log(error)
            
        }
    })
    srv.on('PostInformation', async(req,res)=>{
        try {
            console.log(req.data)
        } catch (error) {
            console.log(error)
        }
    })
    srv.on('PostInfo', async (req, res) => {
        try {
            let Batch_Request = req.data.req_data;
    
            for (let index = 0; index < Batch_Request.length; index++) {
                const element = Batch_Request[index];
                
            }

            let Loger ={
                LOG_ID:new Date().toDateString(),
                LOG_NAME:"SO and SO Service Name",
                SERVICE_NAME:"SO and SO Service Name"

            }
            await cds.run(INSERT.into('DATAMODEL_LOG_TABLE').entries(Loger));
    
            return {
                MSG: "Records are successfully inserted"
            }
        } catch (error) {
            console.error("Error inserting records:", error);
            return {
                error: "Failed to insert records",
                details: error.message
            }
        }
    })
    srv.on('ImportHistory',async(req,res)=>{
        try {
            let {F,DATA} = req.data;

            if (Flag=='C') {
                await cds.run(INSERT.into("Tablw").entries(DATA))
            }
            if (Flag=='U') {
                await cds.run(INSERT.into("Tablw").entries(DATA))
            }
        } catch (error) {
            console.log(error)
        }
    })
}