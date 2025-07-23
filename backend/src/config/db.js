import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
dotenv.config();

export async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions(
            id SERIAL PRIMARY KEY,
            user_id VARCHAR(255) NOT NULL,
            title VARCHAR(255) NOT NULL,
            amount DECIMAL(10,2) NOT NULL,
            category VARCHAR(255) NOT NULL,
            created_at DATE NOT NULL DEFAULT CURRENT_DATE
        )`
        //DECIMAL(10,2)10 Total Digits and 2 digits after the decimal point
        console.log("DataBase Initialized Successfully")
    } catch (error) {
        console.log("OOPS! Something went wrongin initializing DataBase", error);
        process.exit(1)//1=>failure
    }
}


//This creates a SQL connection using our DB URL
export const sql = neon(process.env.DATABASE_URL);
