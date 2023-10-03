import DB from "@/lib/DB";
import { count } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    return NextResponse.json({
        data: 'hello world'
    })
}

export async function POST(request: NextRequest){
    const {name, username, password} = await request.json();
    const db = await DB();

    const duplicate = await checkDuplicateUser(username);
    if (duplicate) {
        return NextResponse.json({
            error: 'true',
            message: 'Username has been used'
        })
    }

    try {
        const [rows, fields] = await db.execute('INSERT INTO USER (name, username, password) VALUES (?,?,?)', [name, username, password])
        return NextResponse.json({
            error: false,
            message: 'Success add new user',
            data: rows
        })
    } catch (error: any) {
        return NextResponse.json({
            error: true,
            message: error.message
        })
    }
}

async function checkDuplicateUser (username: string) : Promise<Boolean> {
    const db = await DB();
    const [rows, field] = await db.execute('SELECT * FROM USER WHERE USERNAME = ?', [username])
    if (rows.length > 0) {
        return true
    }else{
        return false
    }
}