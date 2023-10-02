'use client'

import InputLabel from "@/components/InputLabel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState({value: "", errorLabel: ""})
    const [password, setPassword] = useState({value: "", errorLabel: ""})

    return (
        <div className="max-w-4xl p-4 rounded-lg shadow-md bg-slate-50">
            <h1 className="text-2xl font-bold text-center mb-5">Login</h1>
            <div className="mb-3">
                <InputLabel 
                    label="Username" 
                    errorLabel={username.errorLabel} 
                    value={username.value} 
                    placeholder="your username"
                    onChange={(e:any) => {
                        let value = e.target.value
                        let errorLabel = ""
                        if (value == "") {
                            errorLabel = "Username cannot be null"
                        }

                        setUsername({value: value, errorLabel: errorLabel})
                    }}
                />
            </div>
            <div className="mb-3">
                <label>Password</label>
                <Input 
                    value={password.value} 
                    placeholder="your password"
                    onChange={(e) => {
                        setPassword({
                            value: e.target.value,
                            errorLabel: ""
                        })
                    }}
                />
                <label className="text-xs text-red-500">{password.errorLabel}</label>
            </div>
            <Button className="mt-5 w-full mb-8">Login</Button>
            <div className="text-xs text-center">Don't have an Account? <Link className="font-semibold text-blue-500 hover:underline" href={'/register'}>Sign Up</Link></div>
        </div>
    )
}